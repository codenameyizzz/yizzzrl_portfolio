import { publicAsset } from '../utils/publicAsset';

function cleanLabel(value) {
  return value
    .replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function inferKind(fileName) {
  return /\.(png|jpg|jpeg)$/i.test(fileName) ? 'image' : 'pdf';
}

function createCertificate({
  folder,
  fileName,
  title,
  issuer,
  summary,
  featured = false
}) {
  const kind = inferKind(fileName);
  const category = cleanLabel(folder);

  return {
    id: `${folder}-${fileName}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title: title ?? cleanLabel(fileName),
    issuer: issuer ?? category,
    summary: summary ?? `Previewable ${kind === 'pdf' ? 'PDF' : 'image'} from ${category}.`,
    category,
    kind,
    format: kind === 'pdf' ? 'PDF' : 'Image',
    featured,
    src: publicAsset(`/certificates/${folder}/${fileName}`)
  };
}

export const certificates = [
  createCertificate({
    folder: 'Yizreel_Sipahutar_Huawei_ICT_National_Competition',
    fileName: 'Yizreel_Sipahutar_Computing_Track_1st_Runner-Up-Huawei ICT National Competiton 2025-2026.pdf',
    title: 'Huawei ICT National Competition Computing Track 1st Runner-Up',
    issuer: 'Huawei ICT National Competition',
    summary: 'National competition certificate for 1st runner-up achievement in the Computing Track.',
    featured: true
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Huawei_ICT_National_Competition',
    fileName: 'Yizreel_Sipahutar_Innovation_Track_1st_Runner-Up-Huawei ICT National Competiton 2024-2025.pdf',
    title: 'Huawei ICT National Competition Innovation Track 1st Runner-Up',
    issuer: 'Huawei ICT National Competition',
    summary: 'National innovation competition certificate recognizing Terra-Track as 1st runner-up.',
    featured: true
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_University of Chicago Research Training (Garuda Academic of Excellence)',
    fileName: 'Garuda_ACE_2.0_Yizreel_Sipahutar_001.pdf',
    title: 'Garuda ACE x University of Chicago Research Training Certificate',
    issuer: 'Garuda Academic of Excellence x University of Chicago',
    summary: 'Research training certificate focused on advanced systems, AI, and engineering discipline.',
    featured: true
  }),
  createCertificate({
    folder: 'Oracle Cloud Infrastructure Foundations Associate',
    fileName: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate (1Z0-1122-25) eCertificate.pdf',
    title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
    issuer: 'Oracle',
    summary: 'Official Oracle eCertificate for the AI Foundations Associate certification.',
    featured: true
  }),
  createCertificate({
    folder: 'Oracle Cloud Infrastructure Foundations Associate',
    fileName: 'OCI25AICFA.jpeg',
    title: 'Oracle AI Foundations Associate Badge',
    issuer: 'Oracle',
    summary: 'Image badge for Oracle Cloud Infrastructure 2025 AI Foundations Associate.'
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Huawei_ICT_National_Competition',
    fileName: 'Yizreel_Sipahutar_Cloud_Track_Finalist-Huawei ICT National Competiton 2024-2025.pdf',
    title: 'Huawei ICT National Competition Cloud Track Finalist',
    issuer: 'Huawei ICT National Competition',
    summary: 'Finalist certificate for the Cloud Track at Huawei ICT National Competition.'
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Magang_Berdampak_Kemendikti_Saintek',
    fileName: 'Yizreel Schwartz Sipahutar - Surat Keterangan Internship - 2025.pdf',
    title: 'Internship Verification Letter 2025',
    issuer: 'PT Suitmedia Kreasi Indonesia',
    summary: 'Official internship verification document connected to professional experience.',
    featured: true
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Magang_Berdampak_Kemendikti_Saintek',
    fileName: 'Magang_Berdampak_Yizreel Schwartz Sipahutar_S1_Informatika.pdf',
    title: 'Magang Berdampak Placement Document',
    issuer: 'Kemendikti Saintek',
    summary: 'Placement document for the Magang Berdampak program.'
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Magang_Berdampak_Kemendikti_Saintek',
    fileName: 'Magang_Berdampak_1014 YIZREEL SCHWARTZ SIPAHUTAR-2.pdf',
    title: 'Magang Berdampak Supporting Document',
    issuer: 'Kemendikti Saintek',
    summary: 'Supporting program document related to the Magang Berdampak internship.'
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Indonesian Delegation in Indonesia China Youth Exchange Program',
    fileName: '12 INVITATION TO STUDENTS FOR ICYEP 2024.pdf',
    title: 'Indonesia-China Youth Exchange Program Invitation',
    issuer: 'Indonesia-China Youth Exchange Program',
    summary: 'Official invitation document for the Indonesia-China Youth Exchange Program 2024.'
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Indonesian Delegation in Indonesia China Youth Exchange Program',
    fileName: '(Official Letter) 230724 B 23-4 SD for Visa Assistance Letter to Embassy of China in Jakarta.pdf',
    title: 'Visa Assistance Letter for Embassy of China',
    issuer: 'Indonesia-China Youth Exchange Program',
    summary: 'Official visa assistance letter supporting participation in the exchange program.'
  }),
  createCertificate({
    folder: 'IBM_ML_Specialization_Certificate',
    fileName: 'IBM_ML_Specialization_Coursera 2X7CTN3JEV70_Yizreel_Sipahutar.pdf',
    title: 'IBM ML Specialization Certificate 2X7CTN3JEV70',
    issuer: 'Coursera x IBM',
    summary: 'Course certificate from the IBM Machine Learning Specialization.'
  }),
  createCertificate({
    folder: 'IBM_ML_Specialization_Certificate',
    fileName: 'IBM_ML_Specialization_Coursera C939P98YC3ZJ_Yizreel_Sipahutar.pdf',
    title: 'IBM ML Specialization Certificate C939P98YC3ZJ',
    issuer: 'Coursera x IBM',
    summary: 'Course certificate from the IBM Machine Learning Specialization.'
  }),
  createCertificate({
    folder: 'IBM_ML_Specialization_Certificate',
    fileName: 'IBM_ML_Specialization_Coursera HF33RGRZUAO6_Yizreel_Sipahutar.pdf',
    title: 'IBM ML Specialization Certificate HF33RGRZUAO6',
    issuer: 'Coursera x IBM',
    summary: 'Course certificate from the IBM Machine Learning Specialization.'
  }),
  createCertificate({
    folder: 'IBM_ML_Specialization_Certificate',
    fileName: 'IBM_ML_Specialization_Coursera PRFQ9Y23BZC8_Yizreel_Sipahutar.pdf',
    title: 'IBM ML Specialization Certificate PRFQ9Y23BZC8',
    issuer: 'Coursera x IBM',
    summary: 'Course certificate from the IBM Machine Learning Specialization.'
  }),
  createCertificate({
    folder: 'IBM_ML_Specialization_Certificate',
    fileName: 'IBM_ML_Specialization_Coursera S9TGDE9VFXIE_Yizreel_Sipahutar.pdf',
    title: 'IBM ML Specialization Certificate S9TGDE9VFXIE',
    issuer: 'Coursera x IBM',
    summary: 'Course certificate from the IBM Machine Learning Specialization.'
  }),
  createCertificate({
    folder: 'IBM_ML_Specialization_Certificate',
    fileName: 'IBM_ML_Specialization_Coursera TLLCQ2RMUNLM_Yizreel_Sipahutar.pdf',
    title: 'IBM ML Specialization Certificate TLLCQ2RMUNLM',
    issuer: 'Coursera x IBM',
    summary: 'Course certificate from the IBM Machine Learning Specialization.'
  }),
  createCertificate({
    folder: 'IBM_ML_Specialization_Certificate',
    fileName: 'IBM_ML_Specialization_Coursera YPEGCUPCQMM9_Yizreel_Sipahutar.pdf',
    title: 'IBM ML Specialization Certificate YPEGCUPCQMM9',
    issuer: 'Coursera x IBM',
    summary: 'Course certificate from the IBM Machine Learning Specialization.'
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Front-End_Web_Developer_Path',
    fileName: 'sertifikat_course_123_2931995_240624091320.pdf',
    title: 'Front-End Web Developer Path Certificate 123',
    issuer: 'Dicoding',
    summary: 'Course certificate from the Front-End Web Developer Path.'
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Front-End_Web_Developer_Path',
    fileName: 'sertifikat_course_163_2931995_260825002112.pdf',
    title: 'Front-End Web Developer Path Certificate 163',
    issuer: 'Dicoding',
    summary: 'Course certificate from the Front-End Web Developer Path.'
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Front-End_Web_Developer_Path',
    fileName: 'sertifikat_course_219_2931995_021025144629.pdf',
    title: 'Front-End Web Developer Path Certificate 219',
    issuer: 'Dicoding',
    summary: 'Course certificate from the Front-End Web Developer Path.'
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Front-End_Web_Developer_Path',
    fileName: 'sertifikat_course_256_2931995_240825202536.pdf',
    title: 'Front-End Web Developer Path Certificate 256',
    issuer: 'Dicoding',
    summary: 'Course certificate from the Front-End Web Developer Path.'
  }),
  createCertificate({
    folder: 'Yizreel_Sipahutar_Front-End_Web_Developer_Path',
    fileName: 'sertifikat_course_315_2931995_240624180439.pdf',
    title: 'Front-End Web Developer Path Certificate 315',
    issuer: 'Dicoding',
    summary: 'Course certificate from the Front-End Web Developer Path.'
  }),
  createCertificate({
    folder: 'Cisco Network Academy',
    fileName: '_certificate_yizreelschwartz180304-gmail-com_8c5aaad0-fcc6-4a50-a517-698d8645de88.pdf',
    title: 'Cisco Networking Academy Certificate 8C5AAAD0',
    issuer: 'Cisco Networking Academy',
    summary: 'Course certificate issued by Cisco Networking Academy.'
  }),
  createCertificate({
    folder: 'Cisco Network Academy',
    fileName: '_certificate_yizreelschwartz180304-gmail-com_cf527d1a-c428-41b2-b36a-a21cf47bebaa.pdf',
    title: 'Cisco Networking Academy Certificate CF527D1A',
    issuer: 'Cisco Networking Academy',
    summary: 'Course certificate issued by Cisco Networking Academy.'
  }),
  createCertificate({
    folder: 'PCA & Matrikulasi',
    fileName: 'Matrikulasi.png',
    title: 'Matrikulasi Certificate',
    issuer: 'PCA & Matrikulasi',
    summary: 'Certificate image from the Matrikulasi program.'
  }),
  createCertificate({
    folder: 'PCA & Matrikulasi',
    fileName: 'Yizreel.png',
    title: 'PCA Certificate',
    issuer: 'PCA & Matrikulasi',
    summary: 'Certificate image from PCA & Matrikulasi.'
  })
];

export const featuredCertificates = certificates.filter((item) => item.featured).slice(0, 4);

export const certificatesFooter = [
  'Certificate page - Yizreel Schwartz Sipahutar.',
  'Certifications, official documents, and previewable learning records.'
];
