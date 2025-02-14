+++
title = "Calculation types"
aliases = ["/docs/grafana/latest/panels/calculations-list/", "/docs/sources/panels/reference-calculation-types/", "/docs/grafana/latest/panels/reference-calculation-types"]
weight = 1100
+++

# Reference: Calculation types

You can perform the following calculations in Grafana. Navigate to the **Transform** tab and in the bar gauge, gauge, and stat visualizations.

| Calculation                     | Description                                                       |
| :------------------------------ | :---------------------------------------------------------------- |
| All nulls                       | True when all values are null                                     |
| All zeros                       | True when all values are 0                                        |
| Change count                    | Number of times the field's value changes                         |
| Count                           | Number of values in a field                                       |
| Delta                           | Cumulative change in value, only counts increments                |
| Difference                      | Difference between first and last value of a field                |
| Difference percent              | Percentage change between first and last value of a field         |
| Distinct count                  | Number of unique values in a field                                |
| First (not null)                | First, not null value in a field                                  |
| Max                             | Maximum value of a field                                          |
| Mean                            | Mean value of all values in a field                               |
| Variance (Population)           | Variance (based on population) of all values in a field           |
| Standard deviation (Population) | Standard deviation (based on population) of all values in a field |
| Variance (Sample)               | Variance (based on sample) of all values in a field               |
| Standard deviation (Sample)     | Standard deviation (based on sample) of all values in a field     |
| Min                             | Minimum value of a field                                          |
| Min (above zero)                | Minimum, positive value of a field                                |
| Range                           | Difference between maximum and minimum values of a field          |
| Step                            | Minimal interval between values of a field                        |
| Total                           | Sum of all values in a field                                      |
