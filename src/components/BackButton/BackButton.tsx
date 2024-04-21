<<<<<<< HEAD
<<<<<<< HEAD
import { Body1Bold } from '@/styles/fonts';
=======
import { Body1, Body2Bold } from '@/styles/fonts';
>>>>>>> b287da7 (temp)
=======
import { Body1, Body2Bold } from '@/styles/fonts';
>>>>>>> b287da70273f0befb5c5c6b437883b203f43b605
import { BackLink, ArrowLeftIcon } from './styles';

export default function BackButton(props: { destination: string }) {
  const { destination } = props;
  return (
    <BackLink href={destination}>
      <ArrowLeftIcon />
<<<<<<< HEAD
<<<<<<< HEAD
      <Body1Bold>Back</Body1Bold>
=======
      <Body2Bold>Back</Body2Bold>
>>>>>>> b287da7 (temp)
=======
      <Body2Bold>Back</Body2Bold>
>>>>>>> b287da70273f0befb5c5c6b437883b203f43b605
    </BackLink>
  );
}
