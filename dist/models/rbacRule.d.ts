export interface RbacRule {
    id: number;
    user_id: number;
    group_id: number;
    group: RbacGroup;
}
export interface RbacGroup {
    id: number;
    title: string;
}
