import sys

def build_resume_pdf(output_path):
    # PDF Specifications: 8.5 x 11 inches = 612 x 792 pt
    # Primary Purple Color: #6B46C1 (RGB: 0.42, 0.27, 0.75)
    
    stream_content_p1 = [
        "BT",
        "/F2 26 Tf",
        "0.42 0.27 0.75 rg", # Purple header color
        "206 740 Td",
        "(VURATA JAGADEESH) Tj",
        "ET",
        
        # Subheader contact info
        "BT",
        "/F1 10 Tf",
        "0 0 0 rg", # Black text
        "130 718 Td",
        "(Hyderabad  -  +91 9014177672  -  jagadeeshv0114@gmail.com) Tj",
        "ET",
        "BT",
        "/F1 10 Tf",
        "220 704 Td",
        "(vurata-jagadeesh-355800245) Tj",
        "ET",
        
        # Horizontal Line
        "0.42 0.27 0.75 RG",
        "1.5 w",
        "50 690 m",
        "562 690 l",
        "S",
        
        # SUMMARY Header
        "BT",
        "/F2 13 Tf",
        "0.42 0.27 0.75 rg",
        "50 668 Td",
        "(SUMMARY) Tj",
        "ET",
        
        # Summary paragraph
        "BT",
        "/F1 9.5 Tf",
        "0 0 0 rg",
        "50 648 Td",
        "(Frontend Developer and Python Developer with 1+ years of professional experience in application development) Tj",
        "0 -13 Td",
        "(and workflow automation. Proficient in HTML5, CSS3, JavaScript, React.js, Python, SQL, and MySQL, with a) Tj",
        "0 -13 Td",
        "(strong foundation in developing responsive web applications and automation solutions. Committed to delivering) Tj",
        "0 -13 Td",
        "(high-quality, scalable software while continuously enhancing technical expertise.) Tj",
        "ET",
        
        # Line below summary
        "0.42 0.27 0.75 RG",
        "0.8 w",
        "50 592 m",
        "562 592 l",
        "S",
        
        # WORK EXPERIENCE Header
        "BT",
        "/F2 13 Tf",
        "0.42 0.27 0.75 rg",
        "50 572 Td",
        "(WORK EXPERIENCE) Tj",
        "ET",
        
        # Job 1 Title
        "BT",
        "/F2 10.5 Tf",
        "0 0 0 rg",
        "50 550 Td",
        "(Application Developer , Hallmark Global Technologies Ltd) Tj",
        "330 0 Td",
        "(July 2025 - Present) Tj",
        "ET",
        
        # Job 1 Bullets
        "BT",
        "/F1 9 Tf",
        "50 534 Td",
        "(\\225  Developed business applications using KodeFast low-code/no-code platform leveraging drag-and-drop) Tj",
        "0 -11 Td",
        "(    development capabilities.) Tj",
        "0 -13 Td",
        "(\\225  Configured forms, entities, workflows, and business rules for rapid application development.) Tj",
        "0 -13 Td",
        "(\\225  Built automation-driven solutions to streamline workflows and improve business process efficiency.) Tj",
        "0 -13 Td",
        "(\\225  Developed scalable applications using reusable templates, visual configuration tools, and platform modules.) Tj",
        "0 -13 Td",
        "(\\225  Implemented process logic and data management solutions through drag-and-drop and workflow-driven) Tj",
        "0 -11 Td",
        "(    development.) Tj",
        "0 -13 Td",
        "(\\225  Contributed to digital transformation initiatives by delivering automation-focused enterprise applications.) Tj",
        "ET",
        
        # Job 2 Title
        "BT",
        "/F2 10.5 Tf",
        "0 0 0 rg",
        "50 405 Td",
        "(Software Engineer, Spiffy 9) Tj",
        "345 0 Td",
        "(Nov 2024 - Mar 2025) Tj",
        "ET",
        
        # Job 2 Bullets
        "BT",
        "/F1 9 Tf",
        "50 389 Td",
        "(\\225  Developed Python automation scripts for extracting and processing data from PDF documents.) Tj",
        "0 -13 Td",
        "(\\225  Implemented Regex-based automation for pattern recognition, parsing, and structured data extraction.) Tj",
        "0 -13 Td",
        "(\\225  Automated repetitive document-processing tasks to improve efficiency and reduce manual intervention.) Tj",
        "0 -13 Td",
        "(\\225  Worked on data validation, cleansing, and transformation as part of automation workflows.) Tj",
        "0 -13 Td",
        "(\\225  Contributed to building reliable and scalable Python automation solutions for data processing.) Tj",
        "ET",
        
        # Line below Experience
        "0.42 0.27 0.75 RG",
        "0.8 w",
        "50 305 m",
        "562 305 l",
        "S",
        
        # EDUCATION Header
        "BT",
        "/F2 13 Tf",
        "0.42 0.27 0.75 rg",
        "50 285 Td",
        "(EDUCATION) Tj",
        "ET",
        
        # Edu 1
        "BT",
        "/F2 10 Tf",
        "0 0 0 rg",
        "50 265 Td",
        "(Bachelor of Technology \\(B.Tech\\) in Computer Science and Engineering) Tj",
        "360 0 Td",
        "(2020 - 2024) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 252 Td",
        "(ST. Ann's College of Engineering and Technology    CGPA: 7.1/10) Tj",
        "ET",
        
        # Edu 2
        "BT",
        "/F2 10 Tf",
        "50 230 Td",
        "(Intermediate \\(MPC\\)) Tj",
        "410 0 Td",
        "(2018 - 2020) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 217 Td",
        "(T.L.S.M.S Junior College    CGPA: 7.7/10) Tj",
        "ET",
        
        # Edu 3
        "BT",
        "/F2 10 Tf",
        "50 195 Td",
        "(Secondary School Certificate \\(SSC\\)) Tj",
        "385 0 Td",
        "(2017 - 2018) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 182 Td",
        "(Apex High School    CGPA: 9.2/10) Tj",
        "ET"
    ]

    stream_content_p2 = [
        # Top Divider Line
        "0.42 0.27 0.75 RG",
        "1 w",
        "50 740 m",
        "562 740 l",
        "S",
        
        # ADDITIONAL INFORMATION Header
        "BT",
        "/F2 13 Tf",
        "0.42 0.27 0.75 rg",
        "50 710 Td",
        "(ADDITIONAL INFORMATION) Tj",
        "ET",
        
        # Bullet Points
        "BT",
        "/F2 9.5 Tf",
        "0 0 0 rg",
        "50 685 Td",
        "(\\225  Technical Skills: ) Tj",
        "/F1 9.5 Tf",
        "70 0 Td",
        "(Python, JavaScript, HTML5, CSS3, React JS, MYSQL, SQL Queries) Tj",
        "ET",
        
        "BT",
        "/F2 9.5 Tf",
        "50 665 Td",
        "(\\225  Languages: ) Tj",
        "/F1 9.5 Tf",
        "65 0 Td",
        "(English, Telugu) Tj",
        "ET",
        
        "BT",
        "/F2 9.5 Tf",
        "50 645 Td",
        "(\\225  Certifications: ) Tj",
        "/F1 9.5 Tf",
        "70 0 Td",
        "(Certified in \"Python Automation Intern\" from \"Spiffy9\") Tj",
        "0 -15 Td",
        "(Certified in \"Python Full Stack developer Intern\" from \"Codegnan\") Tj",
        "0 -15 Td",
        "(Certified in \"Machine learning Intern\" from \"Indian servers\") Tj",
        "0 -15 Td",
        "(Certified in \"Internet of Things\" from \"NPTEL\") Tj",
        "ET",
        
        "BT",
        "/F2 9.5 Tf",
        "50 570 Td",
        "(\\225  Achievements: ) Tj",
        "/F1 9.5 Tf",
        "75 0 Td",
        "(Successfully completed multiple technical certifications in Python) Tj",
        "ET"
    ]
    
    stream_str_1 = "\n".join(stream_content_p1)
    stream_str_2 = "\n".join(stream_content_p2)
    
    pdf_body = f"""%PDF-1.4
1 0 obj
<`/Type /Catalog /Pages 2 0 R`>
endobj

2 0 obj
<`/Type /Pages /Count 2 /Kids [3 0 R 6 0 R]`>
endobj

3 0 obj
<`/Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources 4 0 R /Contents 5 0 R`>
endobj

4 0 obj
<`/Font <`/F1 <`/Type /Font /Subtype /Type1 /BaseFont /Helvetica`> /F2 <`/Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold`>`>`>
endobj

5 0 obj
<`/Length {len(stream_str_1)}`>
stream
{stream_str_1}
endstream
endobj

6 0 obj
<`/Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources 4 0 R /Contents 7 0 R`>
endobj

7 0 obj
<`/Length {len(stream_str_2)}`>
stream
{stream_str_2}
endstream
endobj

xref
0 8
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000212 00000 n 
0000000344 00000 n 
0000000410 00000 n 
0000000507 00000 n 
trailer
<`/Size 8 /Root 1 0 R`>
startxref
573
%%EOF"""

    with open(output_path, "wb") as f:
        f.write(pdf_body.encode("latin1"))

if __name__ == "__main__":
    out_file = "c:/Users/JAGADEESH/.gemini/antigravity/scratch/professional-portfolio/public/Vurata_Jagadeesh_Resume.pdf"
    build_resume_pdf(out_file)
    print("Official PDF generated successfully at:", out_file)
