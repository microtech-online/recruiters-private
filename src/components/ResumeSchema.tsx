
export default function ResumeSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "John Doe",
          "url": "https://yourname.com",
          "email": "mailto:john@yourname.com",
          "jobTitle": "Senior Software Engineer",
          "sameAs": [
            "https://www.linkedin.com/in/johndoe",
            "https://github.com/johndoe"
          ],
          "knowsAbout": [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "AI",
            "Machine Learning",
            "System Design",
            "Cloud Architecture"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Senior Software Engineer",
            "occupationLocation": {
              "@type": "Country",
              "name": "United States"
            },
            "skills": [
              "Frontend Architecture",
              "Backend Systems",
              "AI Integration",
              "API Design",
              "Performance Optimization"
            ]
          }
        })
      }}
    />
  );
}