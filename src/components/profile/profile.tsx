import styles from './profile.module.scss';
import classNames from 'classnames';

export interface ProfileProps {
    className?: string;
    name: string;
    imagePath?: string;
    bio: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profile = ({ className, name, imagePath, bio }: ProfileProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div id="profile-header"></div>
            <div id="profile-body">
                <div id="profile-image">
                    <img src={imagePath} alt="profile image" />
                </div>
                <h2>{name}</h2>
            </div>
        </div>
    );
};
