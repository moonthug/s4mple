import {
  LinkHorizontal,
  LinkHorizontalCurve,
  LinkHorizontalLine,
  LinkHorizontalStep,
  LinkVertical,
  LinkVerticalCurve,
  LinkVerticalLine,
  LinkVerticalStep,
} from '@visx/shape';
import { ComponentType } from 'react';


export default function getLinkComponent({
  layout,
  linkType,
  orientation,
}: {
  layout: string;
  linkType: string;
  orientation: string;
}): ComponentType<any> {
  let LinkComponent: ComponentType<any>;

  if (orientation === 'vertical') {
    if (linkType === 'step') {
      LinkComponent = LinkVerticalStep;
    } else if (linkType === 'curve') {
      LinkComponent = LinkVerticalCurve;
    } else if (linkType === 'line') {
      LinkComponent = LinkVerticalLine;
    } else {
      LinkComponent = LinkVertical;
    }
  } else if (linkType === 'step') {
    LinkComponent = LinkHorizontalStep;
  } else if (linkType === 'curve') {
    LinkComponent = LinkHorizontalCurve;
  } else if (linkType === 'line') {
    LinkComponent = LinkHorizontalLine;
  } else {
    LinkComponent = LinkHorizontal;
  }
  return LinkComponent;
}
