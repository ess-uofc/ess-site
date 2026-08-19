import React from 'react'
import "./Public Documents.css";

import Article1 from '../../components/public documents/Article1.jsx';
import Article2 from '../../components/public documents/Article2.jsx';
import Article3 from '../../components/public documents/Article3.jsx';
import Article4 from '../../components/public documents/Article4.jsx';
import Article5 from '../../components/public documents/Article5.jsx';
import Article6 from '../../components/public documents/Article6.jsx';
import Article7 from '../../components/public documents/Article7.jsx';
import Article8 from '../../components/public documents/Article8.jsx';
import Article9 from '../../components/public documents/Article9.jsx';
import Article10 from '../../components/public documents/Article10.jsx';
import Article11 from '../../components/public documents/Article11.jsx';
import Article12 from '../../components/public documents/Article12.jsx';
import Article13 from '../../components/public documents/Article13.jsx';

function PublicDocuments() {
  return (
    <section className="documents-header">

        <h1>Public Documents</h1>

        <p>ESS believes in transparency and accountability. Access publicly available documents including budgets, activity reports, election information, and governing documents.
        </p>

        <a
        href="https://drive.google.com/drive/folders/1uDVChpl-1ni5lij5Mj7cHn3U7DJMRYao"
        target="_blank"
        rel="noopener noreferrer"
        className="public-drive-btn">
        View Public Drive
        </a>

    <h1>University of Calgary Engineering Students' Society Constitution</h1>
    <p>Revision Number: 14 | Revised: Date March 11, 2024</p>
    <h3>Preamble</h3>
    <p>This document is the Constitution of the University of Calgary Engineering Students' Society. It contains the ideals, governing rules, and regulations of the Society.</p>

    <Article1 />
    <Article2 />   
    <Article3 />    
    <Article4 />
    <Article5 />
    <Article6 />
    <Article7 />
    <Article8 />
    <Article9 />
    <Article10 />
    <Article11 />
    <Article12 />
    <Article13 />

    </section>
    
  )
}

export default PublicDocuments