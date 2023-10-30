import { LocationDiv, Addie } from '../styles/components';

export default function Logo(props: {
  District: String;
  Address: String;
  Phone: String;
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
