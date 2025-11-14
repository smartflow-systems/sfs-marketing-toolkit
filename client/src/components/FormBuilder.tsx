import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2, GripVertical } from "lucide-react";

interface FormField {
  id: string;
  type: 'text' | 'email' | 'select' | 'checkbox' | 'textarea';
  label: string;
  required: boolean;
}

export default function FormBuilder() {
  const [fields, setFields] = useState<FormField[]>([
    { id: '1', type: 'text', label: 'Name', required: true },
    { id: '2', type: 'email', label: 'Email', required: true }
  ]);
  const [fieldType, setFieldType] = useState<FormField['type']>('text');

  const addField = () => {
    const newField: FormField = {
      id: Date.now().toString(),
      type: fieldType,
      label: 'New Field',
      required: false
    };
    setFields([...fields, newField]);
    console.log('Field added:', newField);
  };

  const removeField = (id: string) => {
    setFields(fields.filter(f => f.id !== id));
    console.log('Field removed:', id);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Form Builder</h3>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Select value={fieldType} onValueChange={(value) => setFieldType(value as FormField['type'])}>
              <SelectTrigger data-testid="select-field-type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="text">Text Input</SelectItem>
                <SelectItem value="email">Email Input</SelectItem>
                <SelectItem value="select">Dropdown</SelectItem>
                <SelectItem value="checkbox">Checkbox</SelectItem>
                <SelectItem value="textarea">Text Area</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={addField} data-testid="button-add-field">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            {fields.map((field) => (
              <div key={field.id} className="flex items-center gap-2 p-3 rounded-lg border bg-card">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{field.label}</div>
                  <div className="text-xs text-muted-foreground">{field.type}</div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeField(field.id)}
                  data-testid={`button-remove-field-${field.id}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Preview</h3>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
          {fields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id}>
                {field.label}
                {field.required && <span className="text-destructive ml-1">*</span>}
              </Label>
              {field.type === 'textarea' ? (
                <Textarea id={field.id} required={field.required} data-testid={`input-${field.id}`} />
              ) : field.type === 'select' ? (
                <Select>
                  <SelectTrigger id={field.id} data-testid={`select-${field.id}`}>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              ) : field.type === 'checkbox' ? (
                <div className="flex items-center gap-2">
                  <Checkbox id={field.id} data-testid={`checkbox-${field.id}`} />
                  <Label htmlFor={field.id} className="font-normal">I agree</Label>
                </div>
              ) : (
                <Input type={field.type} id={field.id} required={field.required} data-testid={`input-${field.id}`} />
              )}
            </div>
          ))}
          <Button type="submit" className="w-full" data-testid="button-submit-form">
            Submit Form
          </Button>
        </form>
      </Card>
    </div>
  );
}
