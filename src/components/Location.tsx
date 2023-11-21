import { LocationDiv, Addie } from '../styles/components';

export default function Location(props: {
  District: string;
  Address: string;
  Phone: string;
}) {
  const { District, Address, Phone } = props;

  return (
    <LocationDiv>
      <h1>{District}</h1>
      <Addie>{Address}</Addie>
      <p>{Phone}</p>
    </LocationDiv>
  );
}
