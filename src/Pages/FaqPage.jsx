import React, { useState } from "react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services does your company provide?",
      answer:
        "We provide mobile app development, web development, cloud solutions, and digital marketing services.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us through the Contact Us page or email us at support@company.in.",
    },
    {
      question: "Do you offer internships?",
      answer:
        "Yes, we offer paid internships for software development, UI/UX, marketing, and more.",
    },
    {
      question: "Where are your offices located?",
      answer: "We have branches in Chennai, Bangalore, Hyderabad, and Mumbai.",
    },
    {
      question: "Do you provide custom software solutions?",
      answer:
        "Yes, we build fully customized software solutions based on your business requirements.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
