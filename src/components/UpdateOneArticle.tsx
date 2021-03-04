// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect, useRef } from 'react';
import { useUpdateOneArticleMutation } from './core';

const EMPTY_DATE = 'mm / dd / yyyy';

export default function UpdateOneArticle(): React.ReactElement {
  const [postOne] = useUpdateOneArticleMutation();
  const [id, setId] = useState<number>();
  const [url, setUrl] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [ready, setReady] = useState<boolean>();
  const [isPublished, setIsPublished] = useState<boolean>();
  const [added, setAdded] = useState<string>();
  const [edited, setEdited] = useState<string>();
  const [avgTimeStory, setAvgTimeStory] = useState<number>();
  const [avgAllTimeStory, setAvgAllTimeStory] = useState<number>();
  const [published, setPublished] = useState<string>();
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
    setAdded(undefined);
    if (addedRef.current) addedRef.current.value = EMPTY_DATE;
    setEdited(undefined);
    if (editedRef.current) editedRef.current.value = EMPTY_DATE;
    setPublished(undefined);
    if (publishedRef.current) publishedRef.current.value = EMPTY_DATE;
    setAvgTimeStory(undefined);
    setAvgAllTimeStory(undefined);
  };
  useEffect(() => {
    /** */
  }, [error]);
  return (
    <div className="form">
      <h2>Update one article</h2>
      <label className="label">where</label>
      <div className="col">
        <span className="desc">Id*</span>
        <input
          value={id}
          type="number"
          className="field"
          onChange={(e) => {
            setId(parseInt(e.target.value, 10));
          }}
        />
      </div>
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
        disabled={!id}
        className="button"
        type="button"
        onClick={() => {
          if (id !== undefined) {
            postOne({
              variables: {
                where: {
                  id,
                },
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
                setResult(`Article with id ${d.data?.updateOneArticle?.id} updated!`);
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
          }
        }}>
        Update
      </button>
    </div>
  );
}
