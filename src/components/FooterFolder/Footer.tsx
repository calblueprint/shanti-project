import { Body1 } from '@/styles/fonts';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
  MySpanIcon,
  WordDiv,
  WordDiv1,
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
  Body1New,
  Body2New,
  Heading,
  SVGWrapper,
  MySpan,
  Wrapper,
  LinkDiv,
  ContactDiv,
  MissionDiv,
  Body1Bold,
  ArrowUpRightIcon,
} from './styles';

export default function Footer({ ...rest }) {
  const router = useRouter();
  return (
    <main {...rest}>
      <Wrapper>
        <ContactDiv>
          <Heading>Contact Us</Heading>
          <Body1New>Phone: (415) 674-4700</Body1New>
          <SVGWrapper>
            <Body1
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.location.href =
                  'https://www.facebook.com/ShantiProjectSF/';
              }}
            >
              <MySpanIcon>
                <FacebookIcon />
              </MySpanIcon>
            </Body1>
            <Body1
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.location.href =
                  'https://www.youtube.com/channel/UCc3DMrL7_KDOzeJNVkoFrsA';
              }}
            >
              <MySpanIcon>
                <YoutubeIcon />
              </MySpanIcon>
            </Body1>
            <Body1
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.location.href =
                  'https://www.instagram.com/shantiprojectsf/';
              }}
            >
              <MySpanIcon>
                <InstagramIcon />
              </MySpanIcon>
            </Body1>
          </SVGWrapper>
        </ContactDiv>

        <MissionDiv>
          <Body1Bold>Mission District</Body1Bold>
          <WordDiv>
            <Body1New>3170 23rd Street</Body1New>
            <Body1New>San Francisco, CA 94110</Body1New>
          </WordDiv>
          <WordDiv1>
            <Body2New
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(
                  'https://maps.app.goo.gl/LJWvkdhwrRMhjEZs7',
                  '_blank',
                  'noopener,noreferrer',
                );
              }}
            >
              <MySpan>SEE ON MAP</MySpan>
            </Body2New>
            <ArrowUpRightIcon />
          </WordDiv1>
        </MissionDiv>

        <LinkDiv>
          <Body1New
            style={{ cursor: 'pointer' }}
            onClick={() => router.push('/storefront')}
          >
            <MySpan>Shop</MySpan>
          </Body1New>
          <Body1New
            style={{ cursor: 'pointer' }}
            onClick={() => router.push('/profileScreen')}
          >
            <MySpan>Profile</MySpan>
          </Body1New>
          <Body1New
            style={{ cursor: 'pointer' }}
            onClick={() => router.push('/cart')}
          >
            <MySpan>Cart</MySpan>
          </Body1New>
        </LinkDiv>

        <Image
          src="/images/PAWS.png"
          alt="logo pic"
          width={231}
          height={160}
          style={{
            marginTop: '48px',
            marginBottom: '48px',
            marginRight: '20px',
            marginLeft: '20px',
          }}
        />
      </Wrapper>
    </main>
  );
}
