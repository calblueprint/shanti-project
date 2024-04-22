import Link from 'next/link';
import { Body2, Body2Bold } from '@/styles/fonts';
import { ArrowRightIcon, ViewAllDiv } from './styles';

export default function BackButton(props: { destination: string }) {
  const { destination } = props;
  return (
    <Link href={destination}>
      <ViewAllDiv>
        <Body2>View All</Body2>
        <ArrowRightIcon />
      </ViewAllDiv>
    </Link>
  );
}
