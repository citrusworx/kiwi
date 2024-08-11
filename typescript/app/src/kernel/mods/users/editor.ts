import { User } from './user'

class Editor extends User {
    public canEdit!: boolean;
    public canPublish!: boolean;
    public postsPublished: number = 0;
    public postsEdited: number = 0;
}

export { Editor }