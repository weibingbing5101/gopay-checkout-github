import Reflux from 'reflux';
import PwdActions from '../actions/pwd-action';

let ItemStore = Reflux.createStore({
	listenables: ItemActions,

	init() {
		this.items = [];
	},

	loadItems() {
		this.trigger({
			loading: true
		});
	},

	loadItemsCompleted(items) {
		this.items = items;

		this.trigger({
			items : this.items,
			loading: false
		});
	},

	loadItemsFailed(error) {
		this.trigger({
			error : error,
			loading: false
		});
	}
});

export default ItemStore;