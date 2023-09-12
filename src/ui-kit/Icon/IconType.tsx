import { newGuid } from '../../utils/guid';
import {ReactComponent as Svg} from '../assets/icons/files/Svg.svg';
import {ReactComponent as Close} from '../assets/icons/files/Close.svg';
import {ReactComponent as Check} from '../assets/icons/files/Check.svg';
import {ReactComponent as Prev} from '../assets/icons/navigate/Prev.svg';
import {ReactComponent as Next} from '../assets/icons/navigate/Next.svg';
import {ReactComponent as AccordionDown} from '../assets/icons/navigate/AccordionDown.svg';
import './Icon.scss'


export type IconType = | 'Svg' | 'Prev' | 'Next' | 'AccordionDown' | 'Close' | 'Check';

export const iconTypes = new Map([
    ['Svg', <Svg key={newGuid()} />],
    ['Prev', <Prev key={newGuid()} />],
    ['Next', <Next key={newGuid()} />],
    ['AccordionDown', <AccordionDown key={newGuid()} />],
    ['Close', <Close key={newGuid()} />],
    ['Check', <Check key={newGuid()} />],
])
