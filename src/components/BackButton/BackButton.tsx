import { Body1Bold, Body1, Body2Bold } from '@/styles/fonts';
import { BackLink, ArrowLeftIcon } from './styles';

export default function BackButton(props: { destination: string }) {
  const { destination } = props;
  return (
    <BackLink href={destination}>
      <ArrowLeftIcon />
      <Body2Bold>Back</Body2Bold>
    </BackLink>
  );
}
