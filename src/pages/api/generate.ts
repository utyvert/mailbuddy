// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  output: string
}

const GPT_KEY = ''


export default async function generate(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { to, context, purpose, tone, length } = req.body;
    const prompt = `Generate an email to ${to} with the following information:
    Context: ${context}
    Purpose: ${purpose}
    Tone ${tone}
    Length: ${length}`;

    try {
      const response = await fetch(
        'https://api.openai.com/v1/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GPT_KEY}`,
          },
          body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: prompt,
            temperature: 0,
            max_tokens: 600
          })
        }
      );

      const emailGen = await response.json();
      console.log('emailGen', emailGen);
      const email = emailGen.choices[0].text;
      // const outputWithNewLines = email.replace(/\n/g, "\\n");
      console.log(email)
      res.status(200).json({output: email })
    } catch (error) {
      console.error(error);
    }
}
