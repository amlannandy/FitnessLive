const getEmailTemplate = healthData => {
  var strVar = '';
  strVar +=
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  strVar +=
    '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">';
  strVar += '';
  strVar += '<head>';
  strVar +=
    '	<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->';
  strVar +=
    '	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">';
  strVar += '	<meta name="viewport" content="width=device-width">';
  strVar += '	<!--[if !mso]><!-->';
  strVar += '	<meta http-equiv="X-UA-Compatible" content="IE=edge">';
  strVar += '	<!--<![endif]-->';
  strVar += '	<title></title>';
  strVar += '	<!--[if !mso]><!-->';
  strVar +=
    '	<link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">';
  strVar +=
    '	<link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css">';
  strVar +=
    '	<link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">';
  strVar +=
    '	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">';
  strVar +=
    '	<link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css">';
  strVar +=
    '	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">';
  strVar += '	<!--<![endif]-->';
  strVar += '	<style type="text/css">';
  strVar += '		body {';
  strVar += '			margin: 0;';
  strVar += '			padding: 0;';
  strVar += '		}';
  strVar += '';
  strVar += '		table,';
  strVar += '		td,';
  strVar += '		tr {';
  strVar += '			vertical-align: top;';
  strVar += '			border-collapse: collapse;';
  strVar += '		}';
  strVar += '';
  strVar += '		* {';
  strVar += '			line-height: inherit;';
  strVar += '		}';
  strVar += '';
  strVar += '		a[x-apple-data-detectors=true] {';
  strVar += '			color: inherit !important;';
  strVar += '			text-decoration: none !important;';
  strVar += '		}';
  strVar += '	</style>';
  strVar += '	<style type="text/css" id="media-query">';
  strVar += '		@media (max-width: 660px) {';
  strVar += '';
  strVar += '			.block-grid,';
  strVar += '			.col {';
  strVar += '				min-width: 320px !important;';
  strVar += '				max-width: 100% !important;';
  strVar += '				display: block !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.block-grid {';
  strVar += '				width: 100% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.col {';
  strVar += '				width: 100% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.col_cont {';
  strVar += '				margin: 0 auto;';
  strVar += '			}';
  strVar += '';
  strVar += '			img.fullwidth,';
  strVar += '			img.fullwidthOnMobile {';
  strVar += '				max-width: 100% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.no-stack .col {';
  strVar += '				min-width: 0 !important;';
  strVar += '				display: table-cell !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.no-stack.two-up .col {';
  strVar += '				width: 50% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.no-stack .col.num2 {';
  strVar += '				width: 16.6% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.no-stack .col.num3 {';
  strVar += '				width: 25% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.no-stack .col.num4 {';
  strVar += '				width: 33% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.no-stack .col.num5 {';
  strVar += '				width: 41.6% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.no-stack .col.num6 {';
  strVar += '				width: 50% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.no-stack .col.num7 {';
  strVar += '				width: 58.3% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.no-stack .col.num8 {';
  strVar += '				width: 66.6% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.no-stack .col.num9 {';
  strVar += '				width: 75% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.no-stack .col.num10 {';
  strVar += '				width: 83.3% !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.video-block {';
  strVar += '				max-width: none !important;';
  strVar += '			}';
  strVar += '';
  strVar += '			.mobile_hide {';
  strVar += '				min-height: 0px;';
  strVar += '				max-height: 0px;';
  strVar += '				max-width: 0px;';
  strVar += '				display: none;';
  strVar += '				overflow: hidden;';
  strVar += '				font-size: 0px;';
  strVar += '			}';
  strVar += '';
  strVar += '			.desktop_hide {';
  strVar += '				display: block !important;';
  strVar += '				max-height: none !important;';
  strVar += '			}';
  strVar += '		}';
  strVar += '	</style>';
  strVar += '	<style type="text/css" id="icon-media-query">';
  strVar += '		@media (max-width: 660px) {';
  strVar += '			.icons-inner {';
  strVar += '				text-align: center;';
  strVar += '			}';
  strVar += '';
  strVar += '			.icons-inner td {';
  strVar += '				margin: 0 auto;';
  strVar += '			}';
  strVar += '		}';
  strVar += '	</style>';
  strVar += '</head>';
  strVar += '';
  strVar +=
    '<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #eaeef2;">';
  strVar += '	<!--[if IE]><div class="ie-browser"><![endif]-->';
  strVar +=
    '	<table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eaeef2; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#eaeef2" valign="top">';
  strVar += '		<tbody>';
  strVar += '			<tr style="vertical-align: top;" valign="top">';
  strVar +=
    '				<td style="word-break: break-word; vertical-align: top;" valign="top">';
  strVar +=
    '					<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#eaeef2"><![endif]-->';
  strVar += '					<div style="background-color:transparent;">';
  strVar +=
    '						<div class="block-grid " style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">';
  strVar +=
    '							<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">';
  strVar +=
    '								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->';
  strVar +=
    '								<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->';
  strVar +=
    '								<div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">';
  strVar += '									<div class="col_cont" style="width:100% !important;">';
  strVar += '										<!--[if (!mso)&(!IE)]><!-->';
  strVar +=
    '										<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">';
  strVar += '											<!--<![endif]-->';
  strVar +=
    '											<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">';
  strVar += '												<tbody>';
  strVar += '													<tr style="vertical-align: top;" valign="top">';
  strVar +=
    '														<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">';
  strVar +=
    '															<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 40px; width: 100%;" align="center" role="presentation" height="40" valign="top">';
  strVar += '																<tbody>';
  strVar += '																	<tr style="vertical-align: top;" valign="top">';
  strVar +=
    '																		<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="40" valign="top"><span></span></td>';
  strVar += '																	</tr>';
  strVar += '																</tbody>';
  strVar += '															</table>';
  strVar += '														</td>';
  strVar += '													</tr>';
  strVar += '												</tbody>';
  strVar += '											</table>';
  strVar +=
    '											<div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;">';
  strVar +=
    '												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center fixedwidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-hr4dupwtng/185893.jpg" alt="LUCKY BEAUTY" title="LUCKY BEAUTY" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 640px; display: block;" width="640">';
  strVar += '												<!--[if mso]></td></tr></table><![endif]-->';
  strVar += '											</div>';
  strVar +=
    '											<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">';
  strVar += '												<tbody>';
  strVar += '													<tr style="vertical-align: top;" valign="top">';
  strVar +=
    '														<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">';
  strVar +=
    '															<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 40px; width: 100%;" align="center" role="presentation" height="40" valign="top">';
  strVar += '																<tbody>';
  strVar += '																	<tr style="vertical-align: top;" valign="top">';
  strVar +=
    '																		<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="40" valign="top"><span></span></td>';
  strVar += '																	</tr>';
  strVar += '																</tbody>';
  strVar += '															</table>';
  strVar += '														</td>';
  strVar += '													</tr>';
  strVar += '												</tbody>';
  strVar += '											</table>';
  strVar +=
    '											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->';
  strVar +=
    '											<div style="color:#1d1d1d;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">';
  strVar +=
    '												<div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #1d1d1d; mso-line-height-alt: 14px;">';
  strVar +=
    '													<p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 28px;">FitnessLive Health Report</span></strong></p>';
  strVar += '												</div>';
  strVar += '											</div>';
  strVar += '											<!--[if mso]></td></tr></table><![endif]-->';
  strVar +=
    '											<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">';
  strVar += '												<tbody>';
  strVar += '													<tr style="vertical-align: top;" valign="top">';
  strVar +=
    '														<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">';
  strVar +=
    '															<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 35px; width: 100%;" align="center" role="presentation" height="35" valign="top">';
  strVar += '																<tbody>';
  strVar += '																	<tr style="vertical-align: top;" valign="top">';
  strVar +=
    '																		<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="35" valign="top"><span></span></td>';
  strVar += '																	</tr>';
  strVar += '																</tbody>';
  strVar += '															</table>';
  strVar += '														</td>';
  strVar += '													</tr>';
  strVar += '												</tbody>';
  strVar += '											</table>';
  strVar +=
    '											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, sans-serif"><![endif]-->';
  strVar +=
    '											<div style="color:#333333;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.8;padding-top:0px;padding-right:20px;padding-bottom:0px;padding-left:20px;">';
  strVar +=
    '												<div class="txtTinyMce-wrapper" style="line-height: 1.8; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #333333; mso-line-height-alt: 22px;">';
  strVar +=
    '													<p style="font-size: 16px; line-height: 1.8; word-break: break-word; text-align: center; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 29px; margin: 0;">';
  strVar +=
    '														<!--(figmeta)eyJmaWxlS2V5IjoiQzh5eFlHemJYOXd5QkdUVG04eUFCaSIsInBhc3RlSUQiOi0xLCJkYXRhVHlwZSI6InNjZW5lIn0K(/figmeta)-->';
  strVar +=
    '														<!--(figma)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(/figma)--><span style="font-size: 16px;">These are your health statistics for today.</span>';
  strVar += '													</p>';
  strVar += `													<p style="font-size: 16px; line-height: 1.8; word-break: break-word; text-align: center; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 29px; margin: 0;"><span style="font-size: 16px;">Heart Rate -  ${healthData.heartRate} bpm</span></p>`;
  strVar += `													<p style="font-size: 16px; line-height: 1.8; word-break: break-word; text-align: center; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 29px; margin: 0;"><span style="font-size: 16px;">Glucose - ${healthData.glucose} mg/dL</span></p>`;
  strVar += `													<p style="font-size: 16px; line-height: 1.8; word-break: break-word; text-align: center; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 29px; margin: 0;"><span style="font-size: 16px;">Body Temperature - ${healthData.bodyTemperature} °C</span></p>`;
  strVar += `													<p style="font-size: 16px; line-height: 1.8; word-break: break-word; text-align: center; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 29px; margin: 0;"><span style="font-size: 16px;">Electro Cardiogram - ${healthData.electroCardiogram} ms</span></p>`;
  strVar += `													<p style="font-size: 16px; line-height: 1.8; word-break: break-word; text-align: center; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 29px; margin: 0;"><span style="font-size: 16px;">Respiraton - ${healthData.respiration} bpm</span></p>`;
  strVar += `													<p style="font-size: 16px; line-height: 1.8; word-break: break-word; text-align: center; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 29px; margin: 0;"><span style="font-size: 16px;">Blood Pressure - ${healthData.bloodPressure}</span></p>`;
  strVar += `													<p style="font-size: 16px; line-height: 1.8; word-break: break-word; text-align: center; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 29px; margin: 0;"><span style="font-size: 16px;">Oxygen Saturation - ${healthData.oxygenSaturation}%</span></p>`;
  strVar += `													<p style="font-size: 16px; line-height: 1.8; word-break: break-word; text-align: center; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 29px; margin: 0;"><span style="font-size: 16px;">Steps - ${healthData.steps} steps</span></p>`;
  strVar += '												</div>';
  strVar += '											</div>';
  strVar += '											<!--[if mso]></td></tr></table><![endif]-->';
  strVar +=
    '											<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">';
  strVar += '												<tbody>';
  strVar += '													<tr style="vertical-align: top;" valign="top">';
  strVar +=
    '														<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">';
  strVar +=
    '															<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 35px; width: 100%;" align="center" role="presentation" height="35" valign="top">';
  strVar += '																<tbody>';
  strVar += '																	<tr style="vertical-align: top;" valign="top">';
  strVar +=
    '																		<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="35" valign="top"><span></span></td>';
  strVar += '																	</tr>';
  strVar += '																</tbody>';
  strVar += '															</table>';
  strVar += '														</td>';
  strVar += '													</tr>';
  strVar += '												</tbody>';
  strVar += '											</table>';
  strVar += '											<!--[if (!mso)&(!IE)]><!-->';
  strVar += '										</div>';
  strVar += '										<!--<![endif]-->';
  strVar += '									</div>';
  strVar += '								</div>';
  strVar += '								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->';
  strVar +=
    '								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->';
  strVar += '							</div>';
  strVar += '						</div>';
  strVar += '					</div>';
  strVar += '					<div style="background-color:transparent;">';
  strVar +=
    '						<div class="block-grid " style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">';
  strVar +=
    '							<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">';
  strVar +=
    '								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->';
  strVar +=
    '								<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->';
  strVar +=
    '								<div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">';
  strVar += '									<div class="col_cont" style="width:100% !important;">';
  strVar += '										<!--[if (!mso)&(!IE)]><!-->';
  strVar +=
    '										<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">';
  strVar += '											<!--<![endif]-->';
  strVar +=
    '											<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top">';
  strVar += '												<tr style="vertical-align: top;" valign="top">';
  strVar +=
    '													<td style="word-break: break-word; vertical-align: top; padding-top: 5px; padding-right: 0px; padding-bottom: 5px; padding-left: 0px; text-align: center;" align="center" valign="top">';
  strVar +=
    '														<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->';
  strVar += '														<!--[if !vml]><!-->';
  strVar +=
    '														<table class="icons-inner" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation" valign="top">';
  strVar += '															<!--<![endif]-->';
  strVar += '															<tr style="vertical-align: top;" valign="top">';
  strVar +=
    '																<td style="word-break: break-word; vertical-align: top; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;" align="center" valign="top"><a href="https://www.designedwithbee.com/"><img class="icon" alt="Designed with BEE" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/53601_510656/Signature/bee.png" height="32" width="null" align="center" style="border:0;"></a></td>';
  strVar +=
    '																<td style="word-break: break-word; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined;" valign="middle"><a href="https://www.designedwithbee.com/" style="color:#9d9d9d;text-decoration:none;">Designed with BEE</a></td>';
  strVar += '															</tr>';
  strVar += '														</table>';
  strVar += '													</td>';
  strVar += '												</tr>';
  strVar += '											</table>';
  strVar += '											<!--[if (!mso)&(!IE)]><!-->';
  strVar += '										</div>';
  strVar += '										<!--<![endif]-->';
  strVar += '									</div>';
  strVar += '								</div>';
  strVar += '								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->';
  strVar +=
    '								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->';
  strVar += '							</div>';
  strVar += '						</div>';
  strVar += '					</div>';
  strVar += '					<!--[if (mso)|(IE)]></td></tr></table><![endif]-->';
  strVar += '				</td>';
  strVar += '			</tr>';
  strVar += '		</tbody>';
  strVar += '	</table>';
  strVar += '	<!--[if (IE)]></div><![endif]-->';
  strVar += '</body>';
  strVar += '';
  strVar += '</html>';
  return strVar;
};

module.exports = getEmailTemplate;
