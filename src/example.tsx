import * as React from "react";
import { getItemProvider, ILocationTableItem, treeColumns } from "./TreeData";
import { Card } from "azure-devops-ui/Card";
import { Tree } from "azure-devops-ui/TreeEx";
import { ITreeItemProvider, ITreeItemEx } from "azure-devops-ui/Utilities/TreeItemProvider";

export default class TreeExample extends React.Component<{}> {
    private itemProvider: ITreeItemProvider<ILocationTableItem>;

    constructor(props: {}) {
        super(props);

        this.itemProvider = getItemProvider(2);
    }

    public render(): JSX.Element {
        return (
            <Card
                className="flex-grow bolt-card-no-vertical-padding bolt-table-card"
                contentProps={{ contentPadding: false }}
            >
                <Tree<ILocationTableItem>
                    ariaLabel="Basic tree"
                    columns={treeColumns}
                    itemProvider={this.itemProvider}
                    onToggle={(event, treeItem: ITreeItemEx<ILocationTableItem>) => {
                        this.itemProvider.toggle(treeItem.underlyingItem);
                    }}
                    scrollable={true}
                />
            </Card>
        );
    }
}
