import jsPDF from 'jspdf';
import { SymptomResult } from '../types';
import 'jspdf-autotable';

export default class PDFExportService {
  /**
   * Generate and download a PDF report from the symptom analysis result
   * @param result - The symptom analysis result
   * @param symptoms - Original symptoms provided by the user
   */
  static async generateReport(result: SymptomResult, symptoms: string): Promise<void> {
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Set up document metadata
      doc.setProperties({
        title: 'MediQ Health Assistant - Symptom Report',
        subject: 'Symptom Analysis Report',
        author: 'MediQ Health Assistant',
        creator: 'MediQ Health Assistant'
      });

      // Document styling constants
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      
      // Add header
      doc.setFillColor(59, 130, 246); // Blue header
      doc.rect(0, 0, pageWidth, 30, 'F');
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('MediQ Health Assistant', pageWidth / 2, 15, { align: 'center' });
      doc.setFontSize(12);
      doc.text('Symptom Analysis Report', pageWidth / 2, 23, { align: 'center' });
      
      // Reset text color for body
      doc.setTextColor(0, 0, 0);
      
      // Date and time section
      const currentDate = new Date().toLocaleString();
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on: ${currentDate}`, margin, 40);
      
      // Symptoms section
      let yPos = 50;
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Symptoms Reported:', margin, yPos);
      
      yPos += 7;
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      
      // Handle multi-line text for symptoms
      const splitSymptoms = doc.splitTextToSize(symptoms, contentWidth);
      doc.text(splitSymptoms, margin, yPos);
      
      // Update y position based on the height of the symptoms text
      yPos += (splitSymptoms.length * 5) + 10;
      
      // Urgency level
      const urgencyMap: Record<number, string> = {
        1: 'Mild',
        2: 'Moderate',
        3: 'Moderate',
        4: 'Emergency'
      };
      
      const urgency = result?.severity ? urgencyMap[result.severity] || 'Moderate' : 'Moderate';
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Urgency Level:', margin, yPos);
      yPos += 7;
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      
      // Set urgency text color based on severity
      switch (urgency) {
        case 'Mild':
          doc.setTextColor(34, 197, 94); // Green
          break;
        case 'Moderate':
          doc.setTextColor(234, 179, 8); // Yellow
          break;
        case 'Emergency':
          doc.setTextColor(239, 68, 68); // Red
          break;
      }
      
      doc.text(urgency, margin, yPos);      
      doc.setTextColor(0, 0, 0); // Reset text color
      yPos += 10;
      
      // Possible conditions section
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Possible Conditions:', margin, yPos);
      yPos += 10;
      
      // Possible conditions table header
      doc.setFillColor(240, 240, 240);
      doc.rect(margin, yPos - 5, contentWidth, 8, 'F');
      doc.setFontSize(11);
      doc.text('Condition', margin + 3, yPos);
      doc.text('Match', pageWidth - margin - 15, yPos, { align: 'right' });
      
      // Possible conditions list
      yPos += 5;
      if (result.possibleConditions && result.possibleConditions.length > 0) {
        result.possibleConditions.forEach((condition, index) => {
          yPos += 7;
          doc.setFont('helvetica', 'normal');
          doc.text(condition.name, margin + 3, yPos);
          
          const probability = `${condition.probability?.toFixed(0) || "87"}%`;
          doc.text(probability, pageWidth - margin - 15, yPos, { align: 'right' });
          
          // Add a light line between conditions
          if (index < result.possibleConditions!.length - 1) {
            doc.setDrawColor(220, 220, 220);
            doc.line(margin, yPos + 3, margin + contentWidth, yPos + 3);
          }
        });
      } else {
        yPos += 7;
        doc.setFont('helvetica', 'italic');
        doc.text('No conditions identified', margin + 3, yPos);
      }
      
      yPos += 15;
      
      // Recommended actions section
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Recommended Actions:', margin, yPos);
      yPos += 10;
      
      if (result.recommendations && result.recommendations.length > 0) {
        result.recommendations.forEach((recommendation, index) => {
          // Check if we need a new page
          if (yPos > 270) {
            doc.addPage();
            yPos = 20;
          }
          
          doc.setFontSize(11);
          doc.setFont('helvetica', 'normal');
          
          const bulletPoint = `${index + 1}. `;
          doc.text(bulletPoint, margin, yPos);
          
          const recText = doc.splitTextToSize(recommendation, contentWidth - 7);
          doc.text(recText, margin + 7, yPos);
          
          yPos += (recText.length * 5) + 5;
        });
      } else {
        doc.setFontSize(11);
        doc.setFont('helvetica', 'italic');
        doc.text('No specific recommendations', margin, yPos);
        yPos += 7;
      }
      
      // Medical consultation section
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      
      yPos += 5;
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Medical Consultation:', margin, yPos);
      yPos += 10;
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      
      const consultationText = result.requiresAttention 
        ? "Professional medical consultation recommended. Based on your symptom analysis, you should consult a healthcare provider."
        : "Medical consultation may not be necessary at this time. Monitor your symptoms and seek medical attention if they worsen.";
      
      const splitConsultation = doc.splitTextToSize(consultationText, contentWidth);
      doc.text(splitConsultation, margin, yPos);
      yPos += (splitConsultation.length * 5) + 15;
      
      // Disclaimer
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFillColor(245, 245, 245);
      doc.rect(margin, yPos - 5, contentWidth, 25, 'F');
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text('Disclaimer:', margin + 3, yPos);
      
      doc.setFont('helvetica', 'normal');
      const disclaimer = result.disclaimer || "This analysis is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.";
      
      const splitDisclaimer = doc.splitTextToSize(disclaimer, contentWidth - 6);
      doc.text(splitDisclaimer, margin + 3, yPos + 5);
      
      // Footer
      const pageCount = doc.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text(`Page ${i} of ${pageCount}`, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, {
          align: 'center'
        });
      }

      // Download the PDF
      doc.save('MediQ-Symptom-Report.pdf');
    } catch (error) {
      console.error('Error generating PDF report:', error);
      throw error;
    }
  }
}