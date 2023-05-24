import { createBoard } from '@wixc3/react-board';
import { Profile } from '../../../components/profile/profile';

export default createBoard({
    name: 'Profile',
    Board: () => <Profile bio="example bio" name="Sam Siamon" imagePath="../../../assets/cat.jpg" />,
});
