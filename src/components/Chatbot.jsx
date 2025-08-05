import React, { useRef, useState } from 'react';
import './Chatbot.css';

const companyInfo = {
  name: "Go Highers Infotech",
  founders: ["Mr. Divyesh Ramoliya", "Miss. Sakshi Paneliya"],
  co_founders: ["Miss. Sakshi Paneliya"],
  address: "Vikash Shopper, Vrajbhumi Bus Parking, 312, Bhagwan Chowk, Surat, Gujarat 395010",
  phone: "+91 70412 44800",
  email: "info@go-highers.com",
  website: "https://gohighers.in",
  social: {
    instagram: "https://www.instagram.com/go.highersinfotech/",
    linkedin: "https://www.linkedin.com/company/go-highersinfotech/?viewAsMember=true"
  },
  about: "Go Highers is a dynamic IT service provider based in Surat, Gujarat, focused on delivering cutting-edge technology solutions globally. We are committed to transforming ideas into intelligent digital experiences.",
  services: [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Branding"
  ],
  contact: "Reach out to us at info@go-highers.com or call us directly at +91-70412-44800.",
  team: "Our multidisciplinary team includes experienced developers, designers, analysts, and project managers who are passionate about innovation and delivery excellence."
};

const suggestionsList = [
  { label: "About Company", question: "Tell me about your company" },
  { label: "Services", question: "What services do you offer?" },
  { label: "Contact", question: "How can I contact you?" },
  { label: "Team", question: "Who is in your team?" },
  { label: "Address", question: "What is your address?" },
  { label: "Social Media", question: "Share your social media links" },
];

const Chatbot = () => {
  const chatMessagesRef = useRef(null);
  const userInputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [showFirework, setShowFirework] = useState(false);

  const appendMessage = (sender, text) => {
    setMessages(prev => [...prev, { sender, text }]);
    setTimeout(() => {
      if (chatMessagesRef.current) {
        chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleSend = (msg) => {
    if (!msg) return;
    appendMessage('user', msg);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      appendMessage('bot', getCompanyReply(msg));
    }, 1000);
  };

  const sendMessage = () => {
    const userInput = userInputRef.current;
    const message = userInput.value.trim();
    if (!message) return;
    userInput.value = '';
    handleSend(message);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  const handleSuggestion = (question) => {
    userInputRef.current.value = question;
    sendMessage();
  };

  const handleClose = () => {
    setOpen(false);
    setMessages([]);
    setTyping(false);
  };

  // Show welcome message on first open
  React.useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        appendMessage("bot", "Hello! I am Go Highers Infotech's assistant. I can answer questions about our company, services, contact details, and team. Please ask me anything!");
      }, 500);
    }
    // eslint-disable-next-line
  }, [open]);

  return (
    <>
      {/* Chat Toggle Button */}
      {!open && !showFirework && (
        <button className="chatbot-fab" onClick={() => {
          setOpen(true);
          setShowFirework(true);
          setTimeout(() => setShowFirework(false), 2000);
        }}>
          <span role="img" aria-label="ai">🤖</span> Ask Go-AI
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="chatbot-fixed-window">
          <div className="chatbot-header">
            Go-AI Verse Chatbot
            <button className="chatbot-close" onClick={handleClose} title="Close">&times;</button>
          </div>
          <div className="chatbot-messages" ref={chatMessagesRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>{msg.text}</div>
            ))}
            {typing && (
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
          </div>
          <div className="chatbot-input-area">
            <input type="text" ref={userInputRef} placeholder="Type your message..." onKeyDown={handleKeyDown} />
            <button onClick={sendMessage}>Send</button>
          </div>
          <div className="chatbot-suggestions">
            {suggestionsList.map((s, i) => (
              <button key={i} className="suggestion" onClick={() => handleSuggestion(s.question)}>{s.label}</button>
            ))}
          </div>
          {/* Firework overlay ON TOP of chat window */}
          {showFirework && (
            <div className="firework-overlay chatbot-firework-overlay">
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="coming-soon-msg">Coming soon: <b>GO AI Verse</b></div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

function getCompanyReply(msg) {
  msg = msg.toLowerCase();

  // Gujarati and English keyword support
  if (/\b(founder|owner|malik|સ્થાપક|માલિક)\b/.test(msg) ||
      msg.includes("founder nu name") ||
      msg.includes("owner nu name") ||
      msg.includes("founder kon") ||
      msg.includes("owner kon") ||
      msg.includes("founder name") ||
      msg.includes("owner name") ||
      msg.includes("founder su") ||
      msg.includes("owner su")
  ) {
    return `Our founders are ${companyInfo.founders.join(' and ')}.`;
  }

  if (msg.includes("service") || msg.includes("સર્વિસ") || msg.includes("સેવા") || msg.includes("services") || msg.includes("key ky che")) {
    return "Our services include:\n" + companyInfo.services.map(service => `• ${service}`).join('\n');
  }

  if (msg.includes("contact") || msg.includes("email") || msg.includes("phone") || msg.includes("સંપર્ક") || msg.includes("મોબાઇલ") || msg.includes("ઈમેલ")) 
    return `You can contact us at:\nEmail: ${companyInfo.email}\nPhone: ${companyInfo.phone}`;

  if (msg.includes("team") || msg.includes("member") || msg.includes("ટીમ") || msg.includes("સભ્ય")) 
    return companyInfo.team;

  if (msg.includes("address") || msg.includes("સરનામું") || msg.includes("location") || msg.includes("એડ્રેસ")) 
    return `Our address is:\n${companyInfo.address}`;

  if (msg.includes("website") || msg.includes("જાલસ્થાન")) 
    return `Our website is: ${companyInfo.website}`;

  if (msg.includes("social") || msg.includes("media") || msg.includes("link") || msg.includes("સોશિયલ")) 
    return `Connect with us on social media:\nInstagram: ${companyInfo.social.instagram}\nLinkedIn: ${companyInfo.social.linkedin}`;

  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey") || msg.includes("નમસ્તે")) 
    return "Hello! How can I assist you today?";

  if (msg.includes("thank")) 
    return "You're welcome! Let me know if you have any other questions.";

  // Default message for unmatched queries
  return "Sorry, I can only answer questions about our services, contact details, team, address, website, or social media.";
}

export default Chatbot; 