import { CloseButton } from '../CloseButton';
import bug_img_url from '../../assets/img/bug.svg';
import idea_img_url from '../../assets/img/idea.svg';
import thought_img_url from '../../assets/img/thought.svg';
import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bug_img_url,
            alt: 'Imagem um um inseto',
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: idea_img_url,
            alt: 'Imagem de uma lampada',
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thought_img_url,
            alt: 'Imagem de um balão de pensamento',
        },
    },
};
export type TFeedbackType = keyof typeof feedbackTypes;
export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<TFeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);
    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            onFeedbackSent={() => setFeedbackSent(true)}
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                        />
                    )}
                </>
            )}
            <footer className="text-xs text-neutral-400 ">
                Feito com ♥ junto com a{' '}
                <a href="#" className="underline underline-offset-2">
                    Rocketseat
                </a>
            </footer>
        </div>
    );
}
