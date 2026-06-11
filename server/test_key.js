import dotenv from 'dotenv';
dotenv.config({ override: true });
import axios from 'axios';

const key = process.env.OPENAI_API_KEY;
console.log('Key starts with:', key?.substring(0,10));

try {
    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: "Say hello in one word" }]
        },
        {
            headers: {
                Authorization: `Bearer ${key}`,
                "Content-Type": "application/json"
            }
        }
    );
    console.log('SUCCESS! Response:', response.data.choices[0].message.content);
} catch (error) {
    console.log('FAILED! Status:', error.response?.status);
    console.log('Error:', error.response?.data?.error?.message);
}
