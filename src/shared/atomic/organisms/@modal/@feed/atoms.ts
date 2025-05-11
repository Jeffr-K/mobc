import { atom } from "jotai";

/**
 * 피드 작성 모달 관련 atom
 */
export const feedTitleAtom = atom<string>("");

/**
 * 피드 내용 atom
 */
export const feedContentAtom = atom<string>("");

/**
 * 피드 작성 모달 열림 상태 atom
 */
export const feedWriteModalAtom = atom<boolean>(false);

/**
 * 피드 작성 모달 닫기 atom
 */
export const hasDraftAtom = atom(get => get(feedTitleAtom).trim() !== "" || get(feedContentAtom).trim() !== "");

/**
 * 피드 작성 모달 열기 atom
 */
export const resetFeedAtom = atom(null, (get, set) => {
  set(feedTitleAtom, "");
  set(feedContentAtom, "");
});
