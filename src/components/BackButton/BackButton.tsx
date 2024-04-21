<<<<<<< HEAD
import { Body1Bold } from '@/styles/fonts';
=======
import { Body1, Body2Bold } from '@/styles/fonts';
>>>>>>> b287da7 (temp)
import { BackLink, ArrowLeftIcon } from './styles';

export default function BackButton(props: { destination: string }) {
  const { destination } = props;
  return (
    <BackLink href={destination}>
      <ArrowLeftIcon />
<<<<<<< HEAD
      <Body1Bold>Back</Body1Bold>
=======
      <Body2Bold>Back</Body2Bold>
>>>>>>> b287da7 (temp)
    </BackLink>
  );
}
