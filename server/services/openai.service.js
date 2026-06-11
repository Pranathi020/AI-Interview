import axios from "axios";

export const askOpenAI = async (messages) => {
    try {
        if (!messages || messages.length === 0) {
            throw new Error("Messages array is empty.");
        }

        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4o-mini",
                messages: messages
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data.choices[0].message.content;

    } catch (error) {
        console.error("OpenAI Error:", error.response?.data || error.message);
        throw new Error("OpenAI API Error");
    }
};