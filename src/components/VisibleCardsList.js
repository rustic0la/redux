import {selectCard} from "../actions";
import {connect} from "react-redux";
import CardsList from "./CardsList";

const mapStateToVisibleCardsListProps = (state) => {
    const { sortBy, startPrice, endPrice } = state.filterState;
    const sortedState =  state.cardsState.
        sort((a, b) => a[sortBy] - b[sortBy]);
    const sortedAndFilteredState = sortedState.
        filter(c => c.price >= startPrice && c.price <= endPrice);
    return {
        cardsState: sortedAndFilteredState
    };
};
const mapDispatchToVisibleCardsListProps = (dispatch) => {
    return {
        onCardClick: (id) => dispatch(selectCard(id)),
    };
};
const VisibleCardsList = connect(
    mapStateToVisibleCardsListProps,
    mapDispatchToVisibleCardsListProps
)(CardsList);

export default  VisibleCardsList;
