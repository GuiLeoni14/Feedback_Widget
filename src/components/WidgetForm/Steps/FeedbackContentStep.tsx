import { ArrowLeft, Camera } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { TFeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';
interface IFeedbackContentStep {
    feedbackType: TFeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}
export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent,
}: IFeedbackContentStep) {
    const [screenshot, setScreenShot] = useState<string | null>(null);
    const [comment, setComment] = useState<string>('');
    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        console.log({
            screenshot,
            comment,
        });
        onFeedbackSent();
    }
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute  text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6  flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.source} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600  bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes oque está acontencendo"
                    onChange={(event) => setComment(event.target.value)}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenShot} />
                    <button
                        type="submit"
                        disabled={comment.length === 0}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    );
}
