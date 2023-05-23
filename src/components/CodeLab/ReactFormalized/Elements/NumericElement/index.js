import { Numeric } from 'react-formalized';

export default function NumericElement() {
  return (
    <>
      {/* Default numeric elements */}
      <Numeric />
      <Numeric value={50} />
      <Numeric shouldNotType value={5} />
    </>
  );
}
