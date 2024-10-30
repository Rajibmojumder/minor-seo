import DOMPurify from 'dompurify';

function normalizeText(text: string): string {
  return text
    .replace(/[\r\n]+/g, ' ')     // Replace all line breaks with space
    .replace(/\s+/g, ' ')         // Replace multiple spaces with single space
    .replace(/\u200B/g, '')       // Remove zero-width spaces
    .replace(/[^\x20-\x7E\s]/g, '') // Remove non-printable characters except spaces
    .replace(/[\u2018\u2019]/g, "'") // Normalize smart quotes
    .replace(/[\u201C\u201D]/g, '"') // Normalize smart double quotes
    .replace(/\u2013|\u2014/g, '-')  // Normalize dashes
    .trim();                      // Remove leading/trailing whitespace
}

export async function readFileContent(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error(`Failed to read ${file.type} file`));

    if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
      reader.onload = (e) => {
        try {
          const content = e.target?.result as string;
          const sanitized = DOMPurify.sanitize(content, { ALLOWED_TAGS: [] });
          const normalized = normalizeText(sanitized);
          resolve(normalized);
        } catch (error) {
          reject(new Error('Failed to read text file. Please ensure the file is not corrupted.'));
        }
      };
      reader.readAsText(file);
    } 
    else if (file.type === 'application/pdf' || 
             file.type === 'application/msword' || 
             file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      reject(new Error('PDF and Word documents are temporarily unavailable. Please copy and paste the text directly or use a .txt file.'));
    }
    else {
      reject(new Error('Unsupported file type. Please upload a .txt file or paste the text directly.'));
    }
  });
}