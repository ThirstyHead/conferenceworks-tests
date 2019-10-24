# 05-Forms 

This specification is for the 05-Forms exercise at https://thethousandyearweb.com/examples/conferenceworks/forms/exercise.

To run this specification:

```shell
$ gauge run specs/05-forms.spec
```

To view the report:

```shell
$ open reports/html-report/index.html
```

## Fill in Registration form
* Goto ConferenceWorks
* Click "Register"
* Verify "Required" is next to "First Name"
* Verify field "First Name" is invalid
* Click "First Name"
* Write "Suzi"
* Verify field "First Name" is valid
* Verify "Required" is next to "Last Name"
* Verify field "Last Name" is invalid
* Click "Last Name"
* Write "Q"
* Verify field "Last Name" is valid
* Verify "Valid email required" is next to "Email"
* Verify field "Email" is invalid
* Click "Email"
* Write "suzi@q.com"
* Verify field "Email" is valid


