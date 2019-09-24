export class Games {

    constructor(
        public local?: string,
        public opponent?: string,
        public opponent_image?: string,
        public datetime?: Date,
        public league?: string,
        public image?: string,
        public home_score?: string,
        public away_score?: string
    ) {}
}