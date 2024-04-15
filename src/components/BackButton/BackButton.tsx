import { Body1 } from '@/styles/fonts';
import { BackLink, ArrowLeftIcon } from './styles';

export default function BackButton(props: { destination: string }) {
  const { destination } = props;
  return (
    <BackLink href={destination}>
      <ArrowLeftIcon />
      <Body1>Back</Body1>
    </BackLink>
  );
}
