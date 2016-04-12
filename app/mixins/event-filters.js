import Ember from 'ember';

export default Ember.Mixin.create({
    allPeriods: [
        { value: "weekend", text: 'This weekend'},
        { value: "3days", text: 'Next 3 days'},
        { value: "week", text: 'Next week'},
        { value: "timeless", text: 'Seasonal'},
        { value: "past", text: 'Past'}
    ],

    allTypes: [
        { value: "animal", text: "Animal" },
        { value: "art", text: "Art" },
        { value: "concert", text: "Concerts" },
        { value: "farm", text: "Farm Activity" },
        { value: "festival", text: "Festival" },
        { value: "game", text: "Game" },
        { value: "movie", text: "Movies" },
        { value: "museum", text: "Museums" },
        { value: "parent", text: "Parents" },
        { value: "playdate", text: "Play Dates" },
        { value: "science", text: "Sci-Tech" },
        { value: "show", text: "Shows" },
        { value: "sport", text: "Sports"},
        { value: "storytelling", text: "Storytelling" },
        { value: "zoo", text: "Zoo" },
        { value: "misc", text: "Misc"}
    ],

    allDistances: [
        { value: "10", text: '10 miles'},
        { value: "20", text: '20 miles'},
        { value: "30", text: '30 miles'},
        { value: "50", text: '50 miles'},
        { value: "100", text: '100 miles'}
    ],

    allAgeGroups: [
        { value: "infant", text: "Infant"},
        { value: "toddler", text: "Toddler" },
        { value: "pre-school", text: "Pre-school" },
        { value: "school-age", text: "School Age Kids" },
        { value: "pre-teen", text: "Pre-teen" }
    ],
});
