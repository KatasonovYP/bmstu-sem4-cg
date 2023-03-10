import {EPanel} from "../interfaces";
import {create} from "zustand";
import {SyntheticEvent} from "react";

interface IFeatureStore {
	expanded: EPanel;
	handleChange: (panel: EPanel) => (event: SyntheticEvent, isExpanded: boolean) => void;
}

const useFeatureStore = create<IFeatureStore>(
	(set): IFeatureStore => ({

		expanded: EPanel.MANAGER,

		handleChange: (panel: EPanel) =>
			(event: SyntheticEvent, isExpanded: boolean) => {
				set((state): IFeatureStore => ({
					...state,
					expanded: isExpanded ? panel : EPanel.CLOSED
				}))
			}
	}))

export default useFeatureStore;
