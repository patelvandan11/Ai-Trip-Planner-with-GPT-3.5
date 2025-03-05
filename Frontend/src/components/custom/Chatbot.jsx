import React, { useState } from 'react';
import axios from 'axios';
import { FaComment } from 'react-icons/fa';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages([...messages, userMessage]);
            setInput('');
            setLoading(true);

            try {
                const response = await axios.post('https://your-api-endpoint.com/chat', { message: input });
                const botMessage = { text: response.data.reply, sender: 'bot' };
                setMessages(prevMessages => [...prevMessages, botMessage]);
            } catch (error) {
                console.error('Error fetching chatbot response:', error);
            }
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="bg-teal-500 text-white p-3 rounded-full shadow-lg">
                <FaComment size={24} />
            </button>
            {isOpen && (
                <div className="w-80 bg-white shadow-lg border rounded-lg flex flex-col mt-2">
                    <div className="bg-teal-500 rounded-md text-white p-3 font-bold">Chatbot</div>
                    <div className="p-3 h-64 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`p-2 m-1 rounded ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-200'}`}>
                                {message.text}
                            </div>
                        ))}
                        {loading && <div className="text-gray-500">${ans}</div>}
                    </div>
                    <div className="flex p-2 border-t">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            className="flex-grow border p-2 rounded-l"
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSend} className="bg-teal-500  text-white p-2 rounded-r">Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
