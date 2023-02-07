// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  output: string
}

const GPT_KEY = process.env.GPT_API_KEY


export default async function generate(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.body) {
    const { to, context, purpose, additionalTopics, length } = req.body;
    const prompt = `Generate an email to ${to} with the following information:
    Context: ${context}
    Purpose: ${purpose}
    Additional Topics: ${additionalTopics}
    Length: ${length}`;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-002/jobs',
        {
          prompt,
          max_tokens: 600,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GPT_KEY}`,
          },
        }
      );

      const email = response.data.choices[0].text;
      res.status(200).json({output: email});
    } catch (error) {
      console.error(error);
    }
  }
}
