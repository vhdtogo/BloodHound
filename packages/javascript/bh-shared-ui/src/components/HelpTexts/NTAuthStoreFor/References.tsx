// Copyright 2023 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import { FC } from 'react';
import { Link, Box } from '@mui/material';

const References: FC = () => {
    return (
        <Box sx={{ overflowX: 'auto' }}>
            <Link
                target='_blank'
                rel='noopener'
                href='https://specterops.io/wp-content/uploads/sites/3/2022/06/Certified_Pre-Owned.pdf'>
                https://specterops.io/wp-content/uploads/sites/3/2022/06/Certified_Pre-Owned.pdf
            </Link>
            <br />
            <Link
                target='_blank'
                rel='noopener'
                href='https://learn.microsoft.com/en-us/windows-server/security/windows-authentication/credentials-processes-in-windows-authentication#BKMK_CertificatesInWindowsAuthentication'>
                https://learn.microsoft.com/en-us/windows-server/security/windows-authentication/credentials-processes-in-windows-authentication#BKMK_CertificatesInWindowsAuthentication
            </Link>
            <br />
            <Link
                target='_blank'
                rel='noopener'
                href='https://www.pkisolutions.com/understanding-active-directory-certificate-services-containers-in-active-directory/'>
                https://www.pkisolutions.com/understanding-active-directory-certificate-services-containers-in-active-directory/
            </Link>
            <br />
            <Link
                target='_blank'
                rel='noopener'
                href='https://www.ravenswoodtechnology.com/components-of-a-pki-part-2/'>
                https://www.ravenswoodtechnology.com/components-of-a-pki-part-2/
            </Link>
        </Box>
    );
};

export default References;
