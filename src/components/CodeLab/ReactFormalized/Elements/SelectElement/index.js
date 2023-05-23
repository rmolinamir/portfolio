import { Select } from 'react-formalized';

export default function SelectElement() {
  return (
    <>
      {/* Select input with a complex datalist */}
      <Select
        placeholder="Select"
        datalist={[
          'Option A',
          {
            value: '35193BB0sk2F',
            displayValue: 'Option B (custom value)'
          },
          'Option C',
          'Option D',
          {
            value: '192aaa3349130',
            displayValue: 'Option F (custom value)'
          },
        ]}
      />
      {/* Disabled Select input */}
      <Select
        disabled
        placeholder="Select (Disabled)"
        datalist={[
          'Option A',
          'Obtion B',
        ]}
      />
      {/* Required value Select input */}
      <Select
        required
        placeholder="Select (Required, has validity)"
        datalist={[
          {
            value: '',
            displayValue: '(Clear)'
          },
          'Option A',
          'Obtion B',
        ]}
      />
    </>
  );
}
