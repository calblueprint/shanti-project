import Link from 'next/link';
import { ArrowRight } from 'react-feather';
import { ViewAllDiv } from './styles';

export default function BackButton(props: { destination: string }) {
  const { destination } = props;
  return (
    <Link href={destination}>
      <ViewAllDiv>
      <p>View All</p>
        <ArrowRight />
      </ViewAllDiv>
    </Link>
  );
}
