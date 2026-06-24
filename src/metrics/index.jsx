// @third-party
import { SpeedInsights } from '@vercel/speed-insights/next';

// @project
import GTag from './GTag';
import MicrosoftClarity from './MicrosoftClarity';
import Notify from './Notify';

const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || '';
const notifyId = process.env.NEXT_PUBLIC_NOTIFY_ID || '';
const gaId = process.env.NEXT_PUBLIC_ANALYTICS_ID || '';

/***************************  METRICS  ***************************/

export default function Metrics() {
  return (
    <>
      <SpeedInsights />
      {clarityId && <MicrosoftClarity clarityId={clarityId} />}
      {notifyId && <Notify notifyId={notifyId} />}
      {gaId && <GTag gaId={gaId} />}
    </>
  );
}
