"use client";

import styled from "styled-components";
import CodeBlock from "./CodeBlock";

const DocSection = styled.section`
  margin-bottom: 48px;
  padding: 32px;
  background: var(--bg-secondary, white);
  border-radius: 16px;
  box-shadow: 0 4px 16px var(--shadow, rgba(0, 0, 0, 0.08));
  border: 1px solid var(--border-color, rgba(0, 150, 136, 0.1));

  .dark & {
    background: #2d3748;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const DocTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #009688;
  margin-bottom: 12px;

  .dark & {
    color: #4db6ac;
  }
`;

const DocDescription = styled.p`
  font-size: 16px;
  color: var(--text-secondary, #546e7a);
  line-height: 1.6;
  margin-bottom: 32px;

  .dark & {
    color: #cbd5e0;
  }
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary, #263238);
  margin: 32px 0 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e0f2f1;

  .dark & {
    color: #f7fafc;
    border-bottom-color: #4a5568;
  }
`;

const PreviewBox = styled.div`
  padding: 24px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;
  margin: 16px 0;
  border: 2px solid #e0e0e0;

  .dark & {
    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
    border-color: #4a5568;
  }
`;

const PropsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 14px;

  th {
    background: #009688;
    color: white;
    padding: 12px;
    text-align: left;
    font-weight: 600;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid var(--border-color, #e0e0e0);
    color: var(--text-primary, inherit);
  }

  .dark & td {
    color: #e2e8f0;
    border-bottom-color: #4a5568;
  }

  tr:hover {
    background: rgba(0, 150, 136, 0.05);
  }

  .dark & tr:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  code {
    background: #f5f5f5;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    color: #d63384;
  }

  .dark & code {
    background: #1a202c;
    color: #f687b3;
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  background: ${(p) => (p.$required ? "#ef4444" : "#94a3b8")};
  color: white;
  margin-left: 8px;
`;

const ExampleDescription = styled.p`
  color: var(--text-secondary, #546e7a);
  margin-bottom: 16px;

  .dark & {
    color: #cbd5e0;
  }
`;

const ExampleHeading = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-primary, #263238);

  .dark & {
    color: #f7fafc;
  }
`;

const ExampleCodeHeading = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 12px;
  color: var(--text-primary, #263238);

  .dark & {
    color: #f7fafc;
  }
`;

export default function ComponentDoc({
  title,
  description,
  component,
  props,
  examples,
}) {
  return (
    <DocSection>
      <DocTitle>{title}</DocTitle>
      <DocDescription>{description}</DocDescription>

      {/* Props Documentation */}
      <SubTitle>Props</SubTitle>
      <PropsTable>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, idx) => (
            <tr key={idx}>
              <td>
                <code>{prop.name}</code>
                {prop.required && <Badge $required>Required</Badge>}
              </td>
              <td><code>{prop.type}</code></td>
              <td><code>{prop.default || "-"}</code></td>
              <td>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </PropsTable>

      {/* Examples */}
      {examples.map((example, idx) => (
        <div key={idx}>
          <SubTitle>{example.title}</SubTitle>
          <ExampleDescription>
            {example.description}
          </ExampleDescription>
          
          {example.preview && (
            <>
              <ExampleHeading>
                Preview
              </ExampleHeading>
              <PreviewBox>{example.preview}</PreviewBox>
            </>
          )}

          <ExampleCodeHeading>
            Code
          </ExampleCodeHeading>
          <CodeBlock code={example.code} title={example.title} />
        </div>
      ))}
    </DocSection>
  );
}
