// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect, useRef } from 'react';
import { usePostOneArticleMutation } from './core';

const EMPTY_DATE = 'mm / dd / yyyy';

export default function PostOneArticle(): React.ReactElement {
  const [postOne] = usePostOneArticleMutation();
  const [url, setUrl] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [ready, setReady] = useState<boolean>(false);
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const [added, setAdded] = useState<string>();
  const [edited, setEdited] = useState<string>();
  const [published, setPublished] = useState<string>();
  const [avgTimeStory, setAvgTimeStory] = useState<number>();
  const [avgAllTimeStory, setAvgAllTimeStory] = useState<number>();
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const addedRef = useRef<HTMLInputElement>(null);
  const editedRef = useRef<HTMLInputElement>(null);
  const publishedRef = useRef<HTMLInputElement>(null);
  const clearFields = () => {
    setUrl('');
    setType('');
    setReady(false);
    setIsPublished(false);
    setAdded('');
    if (addedRef.current) addedRef.current.value = EMPTY_DATE;
    setEdited('');
    if (editedRef.current) editedRef.current.value = EMPTY_DATE;
    setPublished('');
    if (publishedRef.current) publishedRef.current.value = EMPTY_DATE;
    setAvgTimeStory(undefined);
    setAvgAllTimeStory(undefined);
  };
  useEffect(() => {
    /** */
  }, [error]);
  return (
    <div className="form">
      <h2>Post one article</h2>
      <label className="label">data</label>
      <div className="col">
        <span className="desc">Url*</span>
        <input
          value={url}
          type="text"
          className="field"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
      </div>
      <div className="col">
        <span className="desc">Type*</span>
        <input
          value={type}
          type="text"
          className="field"
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
      </div>
      <div className="col">
        <span className="desc">Ready</span>
        <input
          checked={ready}
          type="checkbox"
          className="field"
          onChange={(e) => {
            setReady(e.target.checked);
          }}
        />
      </div>
      <div className="col">
        <span className="desc">Is published</span>
        <input
          checked={isPublished}
          type="checkbox"
          className="field"
          onChange={(e) => {
            setIsPublished(e.target.checked);
          }}
        />
      </div>
      <div className="col">
        <span className="desc">Added date*</span>
        <input
          ref={addedRef}
          defaultValue={added}
          type="date"
          className="field"
          onChange={(e) => {
            const date = new Date(e.target.value).toISOString();
            if (date !== EMPTY_DATE) setAdded(date);
          }}
        />
      </div>
      <div className="col">
        <span className="desc">Edited date</span>
        <input
          ref={editedRef}
          defaultValue={edited}
          type="date"
          className="field"
          onChange={(e) => {
            const date = new Date(e.target.value).toISOString();
            if (date !== EMPTY_DATE) setEdited(date);
          }}
        />
      </div>
      <div className="col">
        <span className="desc">Published date</span>
        <input
          ref={publishedRef}
          defaultValue={published}
          type="date"
          className="field"
          onChange={(e) => {
            const date = new Date(e.target.value).toISOString();
            if (date !== EMPTY_DATE) setPublished(date);
          }}
        />
      </div>
      <div className="col">
        <span className="desc">Avg time story</span>
        <input
          value={avgTimeStory}
          type="number"
          className="field"
          onChange={(e) => {
            setAvgTimeStory(parseInt(e.target.value, 10));
          }}
        />
      </div>
      <div className="col">
        <span className="desc">Avg all time story</span>
        <input
          value={avgAllTimeStory}
          type="number"
          className="field"
          onChange={(e) => {
            setAvgAllTimeStory(parseInt(e.target.value, 10));
          }}
        />
      </div>
      <div className={error ? 'error' : 'success'}>{result}</div>
      <button
        className="button"
        type="button"
        onClick={() => {
          postOne({
            variables: {
              data: {
                url,
                ready,
                type,
                isPublished,
                added,
                edited,
                published,
                avgTimeStory,
                avgAllTimeStory,
              },
            },
          })
            .then((d) => {
              setResult(`Saved with id ${d.data?.postOneArticle?.id}!`);
              setError(false);
              clearFields();
              setTimeout(() => {
                setResult('');
              }, 3000);
            })
            .catch((e) => {
              setResult(e.message);
              setError(true);
            });
        }}>
        Save
      </button>
    </div>
  );
}
