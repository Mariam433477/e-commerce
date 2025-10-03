import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MainButton } from '../custom/MainButton';
export default function FormAuth({ title, fields, onSubmit, buttonText }) {
  return (
    <>
     <Card className="mx-auto mt-5" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <h2 className="text-center mb-4">{title}</h2>
        <Form 
        // onSubmit={handleSubmit}
        >
          {fields.map((field) => (
            <Form.Group key={field.name} className="mb-3">
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type={field.type}
                name={field.name}
                // value={formData[field.name]}
                // onChange={handleChange}
                required
              />
            </Form.Group>
          ))}
          <MainButton variant="primary" type="submit" className="w-100
          "> {buttonText}</MainButton>
          
        </Form>
      </Card.Body>
    </Card>
    </>
  )
}
