'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let provider1 = vscode.languages.registerCompletionItemProvider('php', {
        provideCompletionItems(document, position, token, context) {
            // a completion item that inserts its text as snippet,
            // the `insertText`-property is a `SnippetString` which we will
            // honored by the editor.
            /* --------------------------------- newForm -------------------------------- */
            const newForm = new vscode.CompletionItem('form:newForm', vscode.CompletionItemKind.Method);
            newForm.insertText = new vscode.SnippetString("\\$form = new Form\('${1:form_ID}', '${2|horizontal,vertical,inline|}', '${3:class=myclass}', '${4|bs3,bs4,material,foundation|}'\);");
            newForm.documentation = new vscode.MarkdownString("$form = new Form($form_ID, $layout = 'horizontal', $attr = '', $framework = 'bs4');\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#construct)");
            /* --------------------------------- newForm -------------------------------- */
            const newFormTemplate = new vscode.CompletionItem('form:newFormTemplate', vscode.CompletionItemKind.Constructor);
            newFormTemplate.insertText = new vscode.SnippetString("use phpformbuilder\\Form;\nuse phpformbuilder\\Validator\\Validator;\n\n@session_start\(\);\ninclude_once rtrim\(\\$_SERVER['DOCUMENT_ROOT'], DIRECTORY_SEPARATOR\) . '/${1:phpformbuilder}/Form.php';\n\n/* =============================================\n    validation if posted\n============================================= */\n\nif \(\\$_SERVER[\"REQUEST_METHOD\"] == \"POST\" && Form::testToken\('${2:my-form}'\) === true\) {\n\n    // create validator & auto-validate required fields\n    \\$validator = Form::validate\('${2:my-form}'\);\n\n    // additional validation\n    \\$validator->maxLength\(100\)->validate\('message'\);\n    \\$validator->email\(\)->validate\('user-email'\);\n\n    // check for errors\n    if \(\\$validator->hasErrors\(\)\) {\n        \\$_SESSION['errors']['${2:my-form}'] = \\$validator->getAllErrors\(\);\n    } else {\n        \\$email_config = array\(\n            'sender_email'    => '${3:you@your-email.com}',\n            'sender_name'     => 'Php Form Builder',\n            'recipient_email' => addslashes\(\\$_POST['user-email']\),\n            'subject'         => 'Contact from Php Form Builder',\n            'filter_values'   => '${2:my-form}, submit-btn, token'\n        \);\n        \\$sent_message = Form::sendMail\(\\$email_config\);\n        Form::clear\('${2:my-form}'\);\n    }\n}\n\\$form = new Form\('${2:my-form}', 'horizontal', 'novalidate'\);\n\\$form->addInput\('text', 'name', '', 'Name', 'required=required'\);\n\\$form->addInput\('text', 'first-name', '', 'First name', 'required=required'\);\n\\$form->addBtn\('button', 'cancel', 0, 'Cancel', 'class=btn btn-warning ladda-button, data-style=zoom-in', 'btn-group'\);\n\\$form->addBtn\('submit', 'submit-btn', 1, 'Submit', 'class=btn btn-success ladda-button, data-style=zoom-in', 'btn-group'\);\n\\$form->printBtnGroup\('btn-group'\);");
            newFormTemplate.documentation = new vscode.MarkdownString("$form = new Form($form_ID, $layout = 'horizontal', $attr = '');\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#construct)");
            /* --------------------------------- setMode -------------------------------- */
            const setMode = new vscode.CompletionItem('form:setMode', vscode.CompletionItemKind.Method);
            setMode.insertText = new vscode.SnippetString("\\$form->setMode\('${1|development,production|}'\);");
            setMode.documentation = new vscode.MarkdownString("$form->setMode('development|production')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#setMode)");
            /* --------------------------------- useLoadJs -------------------------------- */
            const useLoadJs = new vscode.CompletionItem('form:useLoadJs', vscode.CompletionItemKind.Method);
            useLoadJs.insertText = new vscode.SnippetString("\\$form->useLoadJs\('${1:core}'\);");
            useLoadJs.documentation = new vscode.MarkdownString("$form->useLoadJs($bundle)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#useLoadJs)");
            /* --------------------------------- setPluginsUrl -------------------------------- */
            const setPluginsUrl = new vscode.CompletionItem('form:setPluginsUrl', vscode.CompletionItemKind.Method);
            setPluginsUrl.insertText = new vscode.SnippetString("\\$form->setPluginsUrl\(${1:\\$url}\)");
            setPluginsUrl.documentation = new vscode.MarkdownString("form->setPluginsUrl($url, $add_get_vars = true)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/help-center.php#plugins-don-t-work)");
            /* --------------------------------- setAction -------------------------------- */
            const setAction = new vscode.CompletionItem('form:setAction', vscode.CompletionItemKind.Method);
            setAction.insertText = new vscode.SnippetString("\\$form->setAction\(${1:htmlspecialchars\(\\$_SERVER[\"PHP_SELF\"]\)}, ${2|true,false|}\);");
            setAction.documentation = new vscode.MarkdownString("form->setAction($url)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#setAction)");
            /* --------------------------------- setMethod -------------------------------- */
            const setMethod = new vscode.CompletionItem('form:setMethod', vscode.CompletionItemKind.Method);
            setMethod.insertText = new vscode.SnippetString("\\$form->setMethod\('${1|GET,POST|}'\);");
            setMethod.documentation = new vscode.MarkdownString("form->setMethod($method)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#setMethod)");
            /* --------------------------------- setOptions -------------------------------- */
            const setOptions = new vscode.CompletionItem('form:setOptions', vscode.CompletionItemKind.Method);
            setOptions.insertText = new vscode.SnippetString("\\$options = array\(\n        'horizontalLabelCol'       => 'col-sm-${1:4}',\n        'horizontalOffsetCol'      => 'col-sm-offset-${1:4}',\n        'horizontalElementCol'     => 'col-sm-${2:8}',\n\);\n\\$form->setOptions\(\\$options\);");
            setOptions.documentation = new vscode.MarkdownString("form->setOptions($options)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#options-overview)");
            /* --------------------------------- startFieldset -------------------------------- */
            const startFieldset = new vscode.CompletionItem('form:startFieldset', vscode.CompletionItemKind.Method);
            startFieldset.insertText = new vscode.SnippetString("\\$form->startFieldset\('${1:legend}', '${2:class=fieldset-class}', '${3:class=legend-class}'\);");
            startFieldset.documentation = new vscode.MarkdownString("form->startFieldset($legend = '', $fieldset_attr = '', $legend_attr = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#startFieldset)");
            /* --------------------------------- endFieldset -------------------------------- */
            const endFieldset = new vscode.CompletionItem('form:endFieldset', vscode.CompletionItemKind.Method);
            endFieldset.insertText = new vscode.SnippetString("\\$form->endFieldset\(\);");
            endFieldset.documentation = new vscode.MarkdownString("form->endFieldset()\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#endFieldset)");
            /* --------------------------------- startDependentFields -------------------------------- */
            const startDependentFields = new vscode.CompletionItem('form:startDependentFields', vscode.CompletionItemKind.Method);
            startDependentFields.insertText = new vscode.SnippetString("\\$form->startDependentFields\(${1:\\$parent_field}, ${2:\\$show_values}, ${3:\\$inverted = false}\);");
            startDependentFields.documentation = new vscode.MarkdownString("form->startDependentFields($parent_field, $show_values, $inverted = false)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#startDependentFields)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/jquery-plugins.php#dependent-fields-example)\n");
            /* --------------------------------- endDependentFields -------------------------------- */
            const endDependentFields = new vscode.CompletionItem('form:endDependentFields', vscode.CompletionItemKind.Method);
            endDependentFields.insertText = new vscode.SnippetString("\\$form->endDependentFields\(\);");
            endDependentFields.documentation = new vscode.MarkdownString("form->startDependentFields($parent_field, $show_values, $inverted = false)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#endDependentFields)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/jquery-plugins.php#dependent-fields-example)\n");
            /* --------------------------------- setCols -------------------------------- */
            const setCols = new vscode.CompletionItem('form:setCols', vscode.CompletionItemKind.Method);
            setCols.insertText = new vscode.SnippetString("\\$form->setCols\(${1:3}, ${2:9}, '${3|sm,md,lg|}'\);");
            setCols.documentation = new vscode.MarkdownString("form->setCols($labelsCols, $fieldsCols, $breakpoint = 'sm')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#set-cols)");
            /* --------------------------------- addAddon -------------------------------- */
            const addAddon = new vscode.CompletionItem('form:addAddon', vscode.CompletionItemKind.Method);
            addAddon.insertText = new vscode.SnippetString("\\$form->addAddon\(${1:\\$input_name}, ${2:\\$addon_html}, '${3|before,after|}'\);");
            addAddon.documentation = new vscode.MarkdownString("form->addAddon($input_name, $addon_html, $pos)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#add-addon)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#input-with-button-addon)\n");
            /* --------------------------------- addHelper -------------------------------- */
            const addHelper = new vscode.CompletionItem('form:addHelper', vscode.CompletionItemKind.Method);
            addHelper.insertText = new vscode.SnippetString("\\$form->addHelper\(${1:\\$helper_text}, ${2:\\$element_name}\);");
            addHelper.documentation = new vscode.MarkdownString("form->addHelper($helper_text, $element_name)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#add-helper)");
            /* --------------------------------- addIcon -------------------------------- */
            const addIcon = new vscode.CompletionItem('form:addIcon', vscode.CompletionItemKind.Method);
            addIcon.insertText = new vscode.SnippetString("\\$form->addIcon\(${1:\\$input_name}, ${2:\\$icon_html}, '${3|before,after|}'\);");
            addIcon.documentation = new vscode.MarkdownString("form->addIcon($input_name, $icon_html, $pos)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#add-icon)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#input-with-icon)\n");
            /* --------------------------------- addHtml -------------------------------- */
            const addHtml = new vscode.CompletionItem('form:addHtml', vscode.CompletionItemKind.Method);
            addHtml.insertText = new vscode.SnippetString("\\$form->addHtml\(${1:\\$html}, ${2:''}, '${3|before,after|}'\);");
            addHtml.documentation = new vscode.MarkdownString("form->addHtml($html, $element_name = '', $pos = 'after')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#addHtml)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#custom-html)\n");
            /* --------------------------------- groupInputs -------------------------------- */
            const groupInputs = new vscode.CompletionItem('form:groupInputs', vscode.CompletionItemKind.Method);
            groupInputs.insertText = new vscode.SnippetString("\\$form->groupInputs\('${1:field_1}', '${2:field_2}'\);");
            groupInputs.documentation = new vscode.MarkdownString("form->groupInputs($input1, $input2)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#groupInputs)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#input-groups)\n");
            /* --------------------------------- addInputWrapper -------------------------------- */
            const addInputWrapper = new vscode.CompletionItem('form:addInputWrapper', vscode.CompletionItemKind.Method);
            addInputWrapper.insertText = new vscode.SnippetString("\\$form->addInputWrapper\('${1:<div class=\"wrapper\"></div>}', '${2:element_name}'\);");
            addInputWrapper.documentation = new vscode.MarkdownString("form->addInputWrapper($html, $element_name)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#addInputWrapper)");
            /* --------------------------------- addInput -------------------------------- */
            const addInput = new vscode.CompletionItem('form:addInput', vscode.CompletionItemKind.Method);
            addInput.insertText = new vscode.SnippetString("\\$form->addInput\('${1|text,button,color,date,datetime-local,email,file,hidden,image,month,number,password,range,reset,search,submit,tel,time,url,week|}', '${2:name}', '${3:value}', '${4:label}', '${5|required,class=myclass,class=myclass\\, required|}'\);");
            addInput.documentation = new vscode.MarkdownString("form->addInput($type, $name, $value = '', $label = '', $attr = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#addInput)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#input-with-label)\n");
            /* --------------------------------- addTextarea -------------------------------- */
            const addTextarea = new vscode.CompletionItem('form:addTextarea', vscode.CompletionItemKind.Method);
            addTextarea.insertText = new vscode.SnippetString("\\$form->addTextarea\('${1:name}', '${2:value}', '${3:label}', '${4|required,class=myclass,class=myclass\\, required|}'\);");
            addTextarea.documentation = new vscode.MarkdownString("form->addTextarea($name, $value = '', $label = '', $attr = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#addTextarea)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#textarea)\n");
            /* --------------------------------- addOption -------------------------------- */
            const addOption = new vscode.CompletionItem('form:addOption', vscode.CompletionItemKind.Method);
            addOption.insertText = new vscode.SnippetString("\\$form->addOption\('${1:select_name}', '${2:value}', '${3:label}', '${4:}', '${5:}'\);");
            addOption.documentation = new vscode.MarkdownString("form->addOption($select_name, $value, $txt, $group_name = '', $attr = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#addOption)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#select)\n");
            /* --------------------------------- addSelect -------------------------------- */
            const addSelect = new vscode.CompletionItem('form:addSelect', vscode.CompletionItemKind.Method);
            addSelect.insertText = new vscode.SnippetString("\\$form->addSelect\('${1:select_name}', '${2:label}', '${3|class=select2\, required,class=selectpicker\, required,class=select2,class=selectpicker,required|}'\);");
            addSelect.documentation = new vscode.MarkdownString("form->addSelect($select_name, $label = '', $attr = '', $displayGroupLabels = true)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#addSelect)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#select)\n");
            /* --------------------------------- addCountrySelect -------------------------------- */
            const addCountrySelect = new vscode.CompletionItem('form:addCountrySelect', vscode.CompletionItemKind.Method);
            addCountrySelect.insertText = new vscode.SnippetString("\\$form->addCountrySelect\('${1:country}', '${2:Country:}', '${3|required,class=myclass,class=myclass\\, required|}', array\('flag_size' => ${4|16,32|}, 'return_value' => '${5|name,code|}', 'placeholder' => '${6:Select your country}'\)\);");
            addCountrySelect.documentation = new vscode.MarkdownString("form->addCountrySelect($select_name, $label = '', $attr = '', $user_options = array())\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#addCountrySelect)");
            /* --------------------------------- addRadio -------------------------------- */
            const addRadio = new vscode.CompletionItem('form:addRadio', vscode.CompletionItemKind.Method);
            addRadio.insertText = new vscode.SnippetString("\\$form->addRadio\('${1:group_name}', '${2:label}', '${3:value}', '${4:}'\);");
            addRadio.documentation = new vscode.MarkdownString("form->addRadio($group_name, $label, $value, $attr = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#addRadio)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#radio)\n");
            /* --------------------------------- printRadioGroup -------------------------------- */
            const printRadioGroup = new vscode.CompletionItem('form:printRadioGroup', vscode.CompletionItemKind.Method);
            printRadioGroup.insertText = new vscode.SnippetString("\\$form->printRadioGroup\('${1:group_name}', '${2:label}', ${3|true,false|}, '${4|required,class=myclass,class=myclass\\, required|}'\);");
            printRadioGroup.documentation = new vscode.MarkdownString("form->printRadioGroup($group_name, $label = '', $inline = true, $attr = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#printRadioGroup)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#radio)\n");
            /* --------------------------------- addCheckbox -------------------------------- */
            const addCheckbox = new vscode.CompletionItem('form:addCheckbox', vscode.CompletionItemKind.Method);
            addCheckbox.insertText = new vscode.SnippetString("\\$form->addCheckbox\('${1:group_name}', '${2:label}', '${3:value}', '${4:}'\);");
            addCheckbox.documentation = new vscode.MarkdownString("form->addCheckbox($group_name, $label, $value, $attr = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#addCheckbox)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#checkbox)\n");
            /* --------------------------------- printCheckboxGroup -------------------------------- */
            const printCheckboxGroup = new vscode.CompletionItem('form:printCheckboxGroup', vscode.CompletionItemKind.Method);
            printCheckboxGroup.insertText = new vscode.SnippetString("\\$form->printCheckboxGroup\('${1:group_name}', '${2:label}', ${3|true,false|}, '${4|required,class=myclass,class=myclass\\, required|}'\);");
            printCheckboxGroup.documentation = new vscode.MarkdownString("form->printCheckboxGroup($group_name, $label = '', $inline = true, $attr = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#printCheckboxGroup)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#checkbox)\n");
            /* --------------------------------- addFileUpload -------------------------------- */
            const addFileUpload = new vscode.CompletionItem('form:addFileUpload', vscode.CompletionItemKind.Method);
            addFileUpload.insertText = new vscode.SnippetString("\\$form->addHelper\('${1:3 files max. Accepted File Types : .pdf, .doc[x], .xls[x], .txt}', '${2:fieldname}'\);\n\\$fileUpload_config = array\(\n    'upload_dir'    => '${3:../../../../../file-uploads/}',\n    'limit'         => ${4:3},\n    'file_max_size' => ${5:2},\n    'extensions'    => [${6:'pdf', 'doc', 'docx', 'xls', 'xlsx', 'txt'}],\n    'debug'         => ${7|true,false|}\n\);\n\\$form->addFileUpload\('file', ${2}, '', '${8:Upload your file}', '', \\$fileUpload_config\);\n");
            addFileUpload.documentation = new vscode.MarkdownString("form->addFileUpload($type, $name, $value = '', $label = '', $attr = '', $fileUpload_config = '', $current_file = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/jquery-plugins.php#fileuploader)");
            /* --------------------------------- centerButtons -------------------------------- */
            const centerButtons = new vscode.CompletionItem('form:centerButtons', vscode.CompletionItemKind.Method);
            centerButtons.insertText = new vscode.SnippetString("\\$form->centerButtons\(${1|true,false|}\);");
            centerButtons.documentation = new vscode.MarkdownString("form->centerButtons($center)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#center-buttons)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#button)\n");
            /* --------------------------------- addBtn -------------------------------- */
            const addBtn = new vscode.CompletionItem('form:addBtn', vscode.CompletionItemKind.Method);
            addBtn.insertText = new vscode.SnippetString("\\$form->addBtn\(${1|submit,reset,button|}, '${2:name}', '${3:value}', '${4:text}', '${5:class=myclass}', '${6:}'\);");
            addBtn.documentation = new vscode.MarkdownString("form->addBtn($type, $name, $value, $text, $attr = '', $btnGroupName = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#addBtn)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#button)\n");
            /* --------------------------------- printBtnGroup -------------------------------- */
            const printBtnGroup = new vscode.CompletionItem('form:printBtnGroup', vscode.CompletionItemKind.Method);
            printBtnGroup.insertText = new vscode.SnippetString("\\$form->printBtnGroup\(${1:\\$btnGroupName}, '${2:label}'\);");
            printBtnGroup.documentation = new vscode.MarkdownString("form->printBtnGroup($btnGroupName, $label = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#printBtnGroup)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#button-group)\n");
            /* --------------------------------- addPlugin -------------------------------- */
            const addPlugin = new vscode.CompletionItem('form:addPlugin', vscode.CompletionItemKind.Method);
            addPlugin.insertText = new vscode.SnippetString("\\$form->addPlugin\('${1|autocomplete,captcha,colorpicker,icheck,image-picker,material-datepicker,material-timepicker,nice-check,passfield,pickadate,tinymce,tooltip,word-character-count|}', '${2:#selector}', '${3:default}', '${4:}'\);");
            addPlugin.documentation = new vscode.MarkdownString("form->addPlugin($plugin_name, $selector, $js_content = 'default', $js_replacements = '')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/jquery-plugins.php#the-addplugin-function)");
            /* --------------------------------- addRecaptchaV3 -------------------------------- */
            const addRecaptchaV3 = new vscode.CompletionItem('form:addRecaptchaV3', vscode.CompletionItemKind.Method);
            addRecaptchaV3.insertText = new vscode.SnippetString("\\$form->addRecaptchaV3\('${1:sitekey}', '${2:default}', '${3:g-recaptcha-response}, '${4:default}'\);");
            addRecaptchaV3.documentation = new vscode.MarkdownString("form->addRecaptchaV3($sitekey, $action = 'default', $response_fieldname = 'g-recaptcha-response', $xml_config = 'default')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/jquery-plugins.php#recaptchav3-example)");
            /* --------------------------------- addInvisibleRecaptcha -------------------------------- */
            const addInvisibleRecaptcha = new vscode.CompletionItem('form:addInvisibleRecaptcha', vscode.CompletionItemKind.Method);
            addInvisibleRecaptcha.insertText = new vscode.SnippetString("\\$form->addInvisibleRecaptcha\('${1:sitekey}'\);");
            addInvisibleRecaptcha.documentation = new vscode.MarkdownString("form->addInvisibleRecaptcha($sitekey)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/jquery-plugins.php#invisible-recaptcha-example)");
            /* --------------------------------- addRecaptchaV2 -------------------------------- */
            const addRecaptchaV2 = new vscode.CompletionItem('form:addRecaptchaV2', vscode.CompletionItemKind.Method);
            addRecaptchaV2.insertText = new vscode.SnippetString("\\$form->addRecaptchaV2\('${1:sitekey}', '${2:recaptcha}', ${3|false,true|}\);");
            addRecaptchaV2.documentation = new vscode.MarkdownString("form->addRecaptchaV2($sitekey, $recaptcha_id = 'recaptcha', $center = false)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/jquery-plugins.php#recaptchav2-example)");
            /* --------------------------------- modal -------------------------------- */
            const modal = new vscode.CompletionItem('form:modal', vscode.CompletionItemKind.Method);
            modal.insertText = new vscode.SnippetString("\\$form->modal\(${1:\\$modal_target}\);");
            modal.documentation = new vscode.MarkdownString("form->modal($modal_target)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/jquery-plugins.php#modal-example)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#modal-form)\n");
            /* --------------------------------- popover -------------------------------- */
            const popover = new vscode.CompletionItem('form:popover', vscode.CompletionItemKind.Method);
            popover.insertText = new vscode.SnippetString("\\$form->popover\(${1:\\$popover_link}\);");
            popover.documentation = new vscode.MarkdownString("form->popover($popover_link)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/jquery-plugins.php#popover-example)\n\n[![PHP Form Builder Online example code](https://img.shields.io/badge/www.phpformbuilder.pro-online_example-5E731E.svg)](https://www.phpformbuilder.pro/documentation/code-samples.php#popover-form)\n");
            /* --------------------------------- cleanHtmlOutput -------------------------------- */
            const cleanHtmlOutput = new vscode.CompletionItem('form:cleanHtmlOutput', vscode.CompletionItemKind.Method);
            cleanHtmlOutput.insertText = new vscode.SnippetString("\\$form->cleanHtmlOutput\(${1:\\$html}\);");
            cleanHtmlOutput.documentation = new vscode.MarkdownString("form->cleanHtmlOutput($html)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)]()");
            /* --------------------------------- render -------------------------------- */
            const render = new vscode.CompletionItem('form:render', vscode.CompletionItemKind.Method);
            render.insertText = new vscode.SnippetString("\\$form->render\(\);");
            render.documentation = new vscode.MarkdownString("form->render($debug = false, $display = true)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#render)");
            /* --------------------------------- printIncludes -------------------------------- */
            const printIncludes = new vscode.CompletionItem('form:printIncludes', vscode.CompletionItemKind.Method);
            printIncludes.insertText = new vscode.SnippetString("\\$form->printIncludes\('${1|js,css|}'\);");
            printIncludes.documentation = new vscode.MarkdownString("form->printIncludes($type, $debug = false, $display = true)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#printIncludes)");
            /* --------------------------------- printJsCode -------------------------------- */
            const printJsCode = new vscode.CompletionItem('form:printJsCode', vscode.CompletionItemKind.Method);
            printJsCode.insertText = new vscode.SnippetString("\\$form->printJsCode\(\);");
            printJsCode.documentation = new vscode.MarkdownString("form->printJsCode()\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#printJsCode)");
            /* --------------------------------- testToken -------------------------------- */
            const testToken = new vscode.CompletionItem('form:testToken', vscode.CompletionItemKind.Method);
            testToken.insertText = new vscode.SnippetString("if\(Form::testToken\('${1:my-form}'\) === true\) {\n    // token valid, no CSRF.\n    ${2:}\n}");
            testToken.documentation = new vscode.MarkdownString("Form::testToken($form_ID)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#securityt-csrf)");
            /* --------------------------------- validate -------------------------------- */
            const validate = new vscode.CompletionItem('form:validate', vscode.CompletionItemKind.Method);
            validate.insertText = new vscode.SnippetString("Form::validate\('${1:my-form}', '${2:en}'\);");
            validate.documentation = new vscode.MarkdownString("Form::validate($form_ID, $lang = 'en')\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#php-validation-basics)");
            /* --------------------------------- sendMail -------------------------------- */
            const sendMail = new vscode.CompletionItem('form:sendMail', vscode.CompletionItemKind.Method);
            sendMail.insertText = new vscode.SnippetString("\\$email_config = array\(\n    'sender_email'    => '${1:contact@domain.com}',\n    'sender_name'     => '${2:Php Form Builder}',\n    'recipient_email' => ${3:addslashes\(\\$_POST['email']\)},\n    'subject'         => '${4:Contact from my website}',\n    'filter_values'   => '${5:token, submit-btn}'\n\);\n\\$sent_message = Form::sendMail\(\\$email_config\);");
            sendMail.documentation = new vscode.MarkdownString("Form::sendMail($email_config)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#sendMail)");
            /* --------------------------------- registerValues -------------------------------- */
            const registerValues = new vscode.CompletionItem('form:registerValues', vscode.CompletionItemKind.Method);
            registerValues.insertText = new vscode.SnippetString("Form::registerValues\('${1:my-form}'\);");
            registerValues.documentation = new vscode.MarkdownString("Form::registerValues($form_ID)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#registerValues)");
            /* --------------------------------- mergeValues -------------------------------- */
            const mergeValues = new vscode.CompletionItem('form:mergeValues', vscode.CompletionItemKind.Method);
            mergeValues.insertText = new vscode.SnippetString("Form::mergeValues\(array\('${1:step-form-1}', '${2:step-form-2}', '${3:step-form-3}'\)\);");
            mergeValues.documentation = new vscode.MarkdownString("Form::mergeValues(array('step-form-1', 'step-form-2', 'step-form-3'))\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#mergeValues)");
            /* --------------------------------- clear -------------------------------- */
            const clear = new vscode.CompletionItem('form:clear', vscode.CompletionItemKind.Method);
            clear.insertText = new vscode.SnippetString("Form::clear\('${1:my-form}'\);");
            clear.documentation = new vscode.MarkdownString("form->clear($form_ID)\n\n[![PHP Form Builder Documentation](https://img.shields.io/badge/www.phpformbuilder.pro-doc-blue.svg)](https://www.phpformbuilder.pro/documentation/class-doc.php#clear)");
            // return all completion items as array
            return [
                newForm,
                newFormTemplate,
                setMode,
                useLoadJs,
                setPluginsUrl,
                setAction,
                setMethod,
                setOptions,
                startFieldset,
                endFieldset,
                startDependentFields,
                endDependentFields,
                setCols,
                addAddon,
                addHelper,
                addIcon,
                addHtml,
                groupInputs,
                addInputWrapper,
                addInput,
                addTextarea,
                addOption,
                addSelect,
                addCountrySelect,
                addRadio,
                printRadioGroup,
                addCheckbox,
                printCheckboxGroup,
                addFileUpload,
                centerButtons,
                addBtn,
                printBtnGroup,
                addPlugin,
                addRecaptchaV3,
                addInvisibleRecaptcha,
                addRecaptchaV2,
                modal,
                popover,
                cleanHtmlOutput,
                render,
                printIncludes,
                printJsCode,
                testToken,
                validate,
                sendMail,
                registerValues,
                mergeValues,
                clear
            ];
        }
    }, 'form');
    context.subscriptions.push(provider1);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map