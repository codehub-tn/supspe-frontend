import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import ExerciseContainer from "components/containers/ExerciseContainer";
import { Input } from "@mui/material";
const Exercise = () => {
  const [input, setInput] = useState();
  return (
    <ExerciseContainer>
      <Input onChange={(e) => setInput(e.target.value)} />
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        children={input}
      ></ReactMarkdown>
    </ExerciseContainer>
  );
};

export default Exercise;
