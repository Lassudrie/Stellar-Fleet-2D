export default class EmpireSetup {
    constructor(
        id = (typeof crypto !== 'undefined' && crypto.randomUUID)
            ? crypto.randomUUID()
            : ''
    ) {
        this.id = id;
        this.empireName = '';
        this.civilization = '';
        this.leaderName = '';
        this.leader = '';
    }
}
