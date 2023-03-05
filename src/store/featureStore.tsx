import {EPanel} from "../interfaces";
import {create} from "zustand";
import {SyntheticEvent} from "react";

interface IFeatureStore {
	expanded: EPanel;
	setExpanded: (payload: EPanel) => void;
	handleChange: (panel: EPanel) => (event: SyntheticEvent, isExpanded: boolean) => void;
}

const useFeatureStore = create<IFeatureStore>(
	(set): IFeatureStore => ({

		expanded: EPanel.PROGRAM,

		handleChange: (panel: EPanel) =>
			(event: SyntheticEvent, isExpanded: boolean) => {
				set((state): IFeatureStore => ({
					...state,
					expanded: isExpanded ? panel : EPanel.CLOSED
				}))
			},

		setExpanded: (payload: EPanel) => {
			set((state): IFeatureStore => ({
				...state,
				expanded: payload,
			}))
		},
	}))

export default useFeatureStore;
